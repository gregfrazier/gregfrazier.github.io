
'use strict';
const container = document.getElementById('cSurface');
const screen = document.createElement('canvas');
const atlas = document.createElement('canvas');
const avatar = document.createElement('canvas');
//const hippo = document.createElement('canvas');

screen.style.width = "100%";
screen.style.height = "100vh";
container.appendChild(screen);

// Read TextureAtlas
const backgroundTexture = new Image();
const avatarTexture = new Image();
const hippoTexture = new Image();
//backgroundTexture.crossOrigin = "Anonymous";
backgroundTexture.src = 'pexels-photo-67094.png';
avatarTexture.src = 'avatars.png';
hippoTexture.src = 'hippo.png';

class Render {
    constructor() {
        this.renderStack = [];
    }
    add(context, func) {
        this.renderStack.push({ context: context, f: func });
        return this;
    }
    render() {
        let self = this;
        window.requestAnimationFrame(function () {
            for (const key in self.renderStack) {
                if (Object.hasOwnProperty.call(self.renderStack, key)) {
                    const element = self.renderStack[key];
                    element.f.call(element.context);
                }
            }
            setTimeout(self.render(), 33);
        });
    }
}

class Graphics {
    constructor(surface, srcWidth, srcHeight) {
        this.surface = surface;
        this.imageData = this.surface.getImageData(0, 0, srcWidth, srcHeight);
        this.width = srcWidth;
        this.height = srcHeight;
    }
    setPoint(imageData, x, y, color, blend) {
        if (blend == null)
            blend = 1;
        const idx = (x + this.width * y) * 4;
        const r = ((color.r * blend) | 0);
        const g = ((color.g * blend) | 0);
        const b = ((color.b * blend) | 0);
        imageData.data[idx] = r > 255 ? 255 : r;
        imageData.data[idx + 1] = g > 255 ? 255 : g;
        imageData.data[idx + 2] = b > 255 ? 255 : b;
        imageData.data[idx + 3] = 255;
    }
    getPoint = function(imageData, x, y) {
        const idx = (x + this.width * y) * 4;
        var r = imageData.data[idx];
        var g = imageData.data[idx + 1];
        var b = imageData.data[idx + 2];
        return { r:r, g:g, b:b };
    }
    draw() { }
    render() {
        this.draw();
        this.surface.putImageData(this.imageData, 0, 0);
    }
}

class BackgroundGraphics extends Graphics {
    constructor(bg, surface, srcWidth, srcHeight) {
        super(surface, srcWidth, srcHeight);
        this.bg = bg;
        this.bgData = this.bg.getImageData(0, 0, srcWidth, srcHeight);
        this.offset = { x: 0, y: 0 };
    }
    rainbow() {
        return Math.floor(Math.random() * 256);
    }
    draw() {
        for (let x = 0; x < this.width; x++)
                for (let y = 0; y < this.height; y++) {
                    let c = this.getPoint(this.bgData, 
                        (x + this.offset.x) % this.width, 
                        (y + this.offset.y) % this.height);
                    this.setPoint(this.imageData, x, y, c);
                }
        this.offset.x = (this.offset.x - 5) % this.width;
        this.offset.y = (this.offset.y + 3) % this.height;
    }
}

class Character extends Graphics {
    constructor(charTexture, charWidth, charHeight, surface, srcWidth, srcHeight) {
        super(surface, srcWidth, srcHeight);
        this.charTexture = charTexture;
        this.charWidth = charWidth;
        this.charHeight = charHeight;
        this.offset = { x: 0, y: 0 };
    }
    translate(x, y) {
        this.offset.x = x;
        this.offset.y = y;
        return this;
    }
    draw() {
        this.surface.drawImage(this.charTexture, this.offset.x, this.offset.y, 80, 90);
    }
}

class AtlasCharacter extends Graphics {
    constructor(charTexture, charWidth, charHeight, surface, srcWidth, srcHeight) {
        super(surface, srcWidth, srcHeight);
        this.charTexture = charTexture;
        this.charWidth = charWidth;
        this.charHeight = charHeight;
        this.index = 0;
        this.offset = { x: 0, y: 0 };
    }
    translate(x, y) {
        this.offset.x = x;
        this.offset.y = y;
        return this;
    }
    draw() {
        this.surface.drawImage(
            this.charTexture, (this.index * 24), 0, 24, 24, this.offset.x, this.offset.y, 80, 80);
    }
    setIndex(index) {
        this.index = index;
        return this;
    }
}

class ImgBuffer {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.buffer = new Uint8ClampedArray(width * height * 4);
    }
    setPixel(x, y, color) {
        const idx = (x + this.width * y) * 4;
        this.buffer[idx] = color.r > 255 ? 255 : color.r;
        this.buffer[idx + 1] = color.g > 255 ? 255 : color.g;
        this.buffer[idx + 2] = color.b > 255 ? 255 : color.b;
        this.buffer[idx + 3] = 255;
    }
    getBuffer() {
        return new ImageData(this.buffer, this.width, this.height);
    }
}

class TeamMember {
    constructor(name, spriteAtlas, index) {
        this.name = name;
        this.index = index;
        this.atlas = spriteAtlas;
        this.width = 24;
        this.height = 24;
        this.buffer = new ImgBuffer(this.width, this.height);
        this.imageData = this.atlas.getImageData(0, 0, 240, 24);
        this.initImage();
        this.dissolve = false;
    }
    rainbow() {
        return Math.floor(Math.random() * 256);
    }
    getPoint = function(imageData, x, y) {
        const idx = (x + 240 * y) * 4;
        var r = imageData.data[idx];
        var g = imageData.data[idx + 1];
        var b = imageData.data[idx + 2];
        return { r:r, g:g, b:b };
    }
    dissolved() {
        this.dissolve = true;
    }
    isDissolved() {
        return this.dissolve;
    }
    select() {
        let outline = { r: 255, g: 0, b: 255 };
        for (let x = 0; x < this.width; x++) {
            this.buffer.setPixel(x, 0, outline);
            this.buffer.setPixel(x, 1, outline);
            this.buffer.setPixel(x, this.height - 2, outline);
            this.buffer.setPixel(x, this.height - 1, outline);
        }
        for (let y = 0; y < this.height; y++) {
            this.buffer.setPixel(0, y, outline);
            this.buffer.setPixel(1, y, outline);
            this.buffer.setPixel(this.width - 2, y, outline);
            this.buffer.setPixel(this.width - 1, y, outline);
        }
    }
    unselect() {
        let outline = this.dissolve ? { r: 0, g: 0, b: 0 } : { r: 255, g: 255, b: 255 };
        for (let x = 0; x < this.width; x++) {
            this.buffer.setPixel(x, 0, outline);
            this.buffer.setPixel(x, 1, outline);
            this.buffer.setPixel(x, this.height - 2, outline);
            this.buffer.setPixel(x, this.height - 1, outline);
        }
        for (let y = 0; y < this.height; y++) {
            this.buffer.setPixel(0, y, outline);
            this.buffer.setPixel(1, y, outline);
            this.buffer.setPixel(this.width - 2, y, outline);
            this.buffer.setPixel(this.width - 1, y, outline);
        }
    }
    getName() {
        return this.name;
    }
    getIndex() {
        return this.index;
    }
    initImage() {
        this.unselect();
        for (let x = 2; x < this.width - 2; x++)
                for (let y = 2; y < this.height - 2; y++)
                    this.buffer.setPixel(x, y, this.getPoint(this.imageData, x + (this.index * 24), y));
                    /*this.buffer.setPixel(x, y, {
                        r: this.rainbow(),
                        g: this.rainbow(),
                        b: this.rainbow()
                    });*/
    }
    renderToSurface(surface, x, y) {
        surface.putImageData(this.buffer.getBuffer(), x, y);
    }
    getImageData() {
        return this.buffer.getBuffer();
    }
}

class TeamMemberManager {
    constructor(screenSurface, gridWidth) {
        this.members = [];
        this.currentSelection = null;
        this.screenSurface = screenSurface;
        this.gridWidth = gridWidth;
        this.translateX = 0;
        this.translateY = 0;
        this.running = true;
    }
    add(member) {
        this.members.push(member);
        return this;
    }
    translate(x, y) {
        this.translateX = x;
        this.translateY = y;
        return this;
    }
    update() {
        if (this.running) {
            if (this.currentSelection != null)
                this.currentSelection.unselect();
            this.currentSelection = this.undissolvedRandomMember();
            this.currentSelection.select();
        }
        this.atlasCharacter.setIndex(this.currentSelection.getIndex());
    }
    render() {
        let gridY = (key, gridWidth) => Math.ceil((key + 1) / gridWidth) - 1;
        let x = 0;
        for (const key in this.members) {
            let member = this.members[key];
            member.renderToSurface(this.screenSurface, this.translateX + ((x % this.gridWidth) * 25),
                this.translateY + (gridY(x, this.gridWidth) * 25));
            x++;
        }
    }
    undissolvedRandomMember() {
        let undissolved = this.members.filter(x => !x.isDissolved());
        let rnd = Math.floor(Math.random() * undissolved.length)
        return undissolved[rnd];
    }
    random() {
        return Math.floor(Math.random() * this.members.length);
    }
    grid(width) {
        this.gridWidth = width;
    }
    pick() {
        this.running = !this.running;
        this.currentSelection.dissolved();
    }
    bind(atlasCharacter) {
        this.atlasCharacter = atlasCharacter;
        return this;
    }
}



const fire = [0,0,0];

avatarTexture.onload = function() {
    fire.pop();
    if (fire.length == 0)
        go();
};

backgroundTexture.onload = function() {
    fire.pop();
    if (fire.length == 0)
        go();
};

hippoTexture.onload = function() {
    fire.pop();
    if (fire.length == 0)
        go();
};

let go = function() {
    const srcWidth = backgroundTexture.naturalWidth;
    const srcHeight = backgroundTexture.naturalHeight;

    atlas.width = srcWidth;
    atlas.height = srcHeight;
    const screenSurface = screen.getContext('2d');
    
    const atlasSurface = atlas.getContext('2d');
    atlasSurface.drawImage(backgroundTexture, 0, 0);
    
    avatar.width = avatarTexture.naturalWidth;
    avatar.height = avatarTexture.naturalHeight;
    const avatarSurface = avatar.getContext('2d');
    avatarSurface.drawImage(avatarTexture, 0, 0);

    //hippo.width = hippoTexture.naturalWidth;
    //hippo.height = hippoTexture.naturalHeight;
    //const hippoSurface = hippo.getContext('2d');
    //hippoSurface.drawImage(hippoTexture, 0, 0);

    const bg = new BackgroundGraphics(atlasSurface, screenSurface, srcWidth, srcHeight);
    const manager = new TeamMemberManager(screenSurface, 5);
    manager.translate((300 / 2) - (125 / 2), 80).add(new TeamMember("Jim", avatarSurface, 0))
        .add(new TeamMember("Jim", avatarSurface, 1))
        .add(new TeamMember("Mufaro", avatarSurface, 2))
        .add(new TeamMember("Mufaro", avatarSurface, 3))
        .add(new TeamMember("Mufaro", avatarSurface, 4))
        .add(new TeamMember("Greg", avatarSurface, 5))
        .add(new TeamMember("Greg", avatarSurface, 6))
        .add(new TeamMember("Tahmina", avatarSurface, 7))
        .add(new TeamMember("Uma", avatarSurface, 8))
        .add(new TeamMember("Ashwini", avatarSurface, 9));

    const hippo = new Character(hippoTexture, hippoTexture.naturalWidth, hippoTexture.naturalHeight, screenSurface, srcWidth, srcHeight);
    hippo.translate(3, 50);

    const opponent = new AtlasCharacter(avatarTexture, 24, 24, screenSurface, srcWidth, srcHeight).setIndex(0);
    opponent.translate(217, 50);
    manager.bind(opponent);

    document.addEventListener("keyup", function(t) {
        if (t.which === 32)
            manager.pick();
    }, true);
    
    const renderer = new Render();
    renderer.add(manager, manager.update);
    renderer.add(bg, bg.render);
    renderer.add(hippo, hippo.draw);
    renderer.add(opponent, opponent.draw);
    renderer.add(manager, manager.render);
    renderer.render();
};