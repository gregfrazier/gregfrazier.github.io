// cooresponds with the select box in the html
const worldMaps = [
    [...Array(14)].map(() => [...Array(14)].map(() => 0)),
    [ 
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0] 
    ],
    [ 
        [0] 
    ],
    [ 
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1] 
    ],
    [ 
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1]
    ],
    [ 
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1] 
    ],
];

// Main canvas to draw to, declared here because need it's reference to clear the event listener on load
const canvas = document.getElementById('cSurface');

const defs = {
    water: 0,
    land: 1,
    node: (map, x, y) => {
        return {
            value: map[y][x], x: x, y: y
        };
    },
    isWater: (node) => node.value === defs.water,
    isEdge: (map, x, y) => y <= 0 || y >= map.length - 1 || x <= 0 || x >= map[0].length - 1
};

// This tests the node to see if it's part of a lake.
// This code can read the same node up to 3 times, so it sucks with large areas.
const testNode = (map, x, y) => {
    let queue = [];
    let foundOcean = false;
    const root = defs.node(map, x, y);
    if (!defs.isWater(root)) return false;
    queue.push(root);
    while (queue.length !== 0 && !foundOcean) {
        let node = queue.shift();
        if (!defs.isWater(node)) continue;
        if (defs.isEdge(map, node.x, node.y)) {
            foundOcean = true;
            break;
        }
        // Set as visited, because it's destructive, send in a copy of the map.
        map[node.y][node.x] = 2;
        queue.push(defs.node(map, node.x - 1, node.y));
        queue.push(defs.node(map, node.x + 1, node.y));
        queue.push(defs.node(map, node.x, node.y - 1));
        queue.push(defs.node(map, node.x, node.y + 1));
    }
    return !foundOcean;
};

// All this stuff below is strictly for the presentation part.
const textureAtlas = new Image();
    textureAtlas.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACHUExURQgYGUejRwCZ2xgUJf///+i3liZcQv6uND4nMXM+ObhvUOfe3j6JSP/mHIubtMDL3OQ7RPd2ImPHTbVQiFppiBk8PjpEZiYrROSmcjyTSNfMzPPs7Czo9f7nYc/Hx+/s7NfJyeefMr+wsMe3t8d6WatkRWg3MoNJRGAyLSvn9ItLL5dUNwAAAELJyWYAAAAtdFJOU///////////////////////////////////////////////////////////AKXvC/0AAAAJcEhZcwAADsQAAA7EAZUrDhsAABdBSURBVHhe7V2LYts2tnTNrC1ZrpNN49Rt7b3pbZs+Vv//fTszZ0A8SFmkbMlqpZFI4AAgiRkcgABNJRfri1lYX3zzLNrzrSfg0uE2dMC7d11n8yX4FxAx1NFVn4Stxdv8cQWuHAqX140CoEiu64opEhaL5aLrblbKdNqOalCAUGAe/yHBFtMFuGVEu8tKj3X37bfd3fv3d923PTsQXS7Bf7mEAN3q8lIidNerm90EEP83EwCkawEYXGURumvyf/++uw4FwFTcgcUCfrHsLi+71YcPq+trqKFDZuP1BNhq6yoVTLrEbeUD5N9RATl4F+Th/vKANUh3l1334QOEgrkb3l4A7lolPqw/fEDQ3d29h/vTCd6DL2k3HoDRofsA7pUDJEaxzwiqdSrTnPIGAghjAqz/fW0B7uj+SYBgj709QKTDObIHiBKQI4ZNwAlEYb+lAPXdAKPA7b8Z6e40wlEAKFF6ALQomhwY8E941/N1AuAEISccXgCQ7pu+6vpXSIYHgDrJwg86bWAdGoA92330zidCDQY5kSBk85ACRNUlgCTA2M9gvb6OIHQJymDL+2DvASSPDPSA0XmACDZoc8JOeAMBuo9JAHGFxzMGXH+wAgJZBTAOsDcEezqFbwKr776LecCqnwdUDGVkATLZMRxegIQkBHYl/3X3iTe6m9QFJIjmPzfdknxhfPddt7q9XUGFUoCICYUA23AQAeSo3cePoQBIk3cvwO27YhYEkBa+nz7d3X0iYTiAEpIAN9130OT2VsL4GFJ2TJjM/yACqOm7VoCIcV/RB9jmBi04PgW4yR6g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';

let singleListener = null;

// This waits until the texture is loaded before triggering the first draw
textureAtlas.onload = function() {
    singleListener = create(worldMaps[0]);
};

btnLoad.addEventListener('click', () => {
    canvas.removeEventListener("mouseup", singleListener, true);
    singleListener = create(worldMaps[document.getElementById('exampleSelect').selectedIndex]);
});

const create = (mapthing) => {
    const world = {
        scale: 16,
        size: mapthing[0].length, // square
        textureSize: { w: 128, h: 128 },
        loadedTextures: [1, 1, 1]
    };
    const atlasCanvas = document.getElementById('atlas');
    const Surface = canvas.getContext('2d');
    const atlasSurface = atlasCanvas.getContext('2d');

    atlasSurface.drawImage(textureAtlas, 0, 0);
    Surface.clearRect(0,0,640,480);
    
    const draw = () => {
        mapthing.forEach(function(o, p){
            //console.log("drawing");
            o.forEach(function(u, i) {
                const t = (i + (p * world.size));
                let waterTileChoice = { x: 1, y: 5 };
                let landTileChoice = { x: 1, y: 5 };

                // I am not going to refactor a code kata, but this code can be simplied greatly.
                // land
                if (u == 1) {
                    const flip = (c) => c == 0 ? 1 : 0;
                    let north = flip(p > 0 ? mapthing[p - 1][i] : 0) << 3;
                    let south = flip(p < world.size - 1 ? mapthing[p + 1][i] : 0) << 2;
                    let east = flip(i < world.size - 1 ? mapthing[p][i + 1] : 0) << 1;
                    let west = flip(i > 0 ? mapthing[p][i - 1] : 0);
                    let value = north | south | east | west;
                    const tiles = [
                        {x: 1, y: 1}, // none
                        {x: 0, y: 1}, // w
                        {x: 2, y: 1}, // e
                        {x: 5, y: 1}, // ew
                        {x: 1, y: 3}, // s
                        {x: 0, y: 3}, // sw
                        {x: 2, y: 3}, // se
                        {x: 5, y: 2}, // sew
                        {x: 1, y: 0}, // n
                        {x: 0, y: 0}, // nw
                        {x: 2, y: 0}, // ne
                        {x: 5, y: 0}, // new
                        {x: 8, y: 7}, // ns
                        {x: 7, y: 7}, // nsw
                        {x: 9, y: 7}, // nse
                        {x: 7, y: 8}, // nsew
                    ];
                    landTileChoice = tiles[value];
                }
                
                
                // Water
                if (u == 0) {
                    let north = (p > 0 ? mapthing[p - 1][i] : 0) << 3;
                    let south = (p < world.size - 1 ? mapthing[p + 1][i] : 0) << 2;
                    let east = (i < world.size - 1 ? mapthing[p][i + 1] : 0) << 1;
                    let west = i > 0 ? mapthing[p][i - 1] : 0;
                    let value = north | south | east | west;
                    const tiles = [
                        {x: 1, y: 5},  // none
                        {x: 0, y: 5},  // w
                        {x: 2, y: 5},  // e
                        {x: 6, y: 5},  // ew
                        {x: 1, y: 6},  // s
                        {x: 0, y: 6},  // sw
                        {x: 4, y: 6},  // se
                        {x: 5, y: 6},  // sew
                        {x: 9, y: 8},  // n
                        {x: 8, y: 8},  // nw
                        {x: 12, y: 8}, // ne
                        {x: 7, y: 9},  // new
                        {x: 5, y: 5},  // ns
                        {x: 5, y: 5},  // nsw
                        {x: 5, y: 5},  // nse
                        {x: 8, y: 9},  // nsew
                    ];
                    waterTileChoice = tiles[value];
                }
                // This thing right here is what really helps kill the efficiency, it's copying the map each tile.
                if (u == 0 && !testNode(mapthing.map(x => x.map(c => c)), i, p)) {
                    // This is how we make the water brownish for ocean
                    Surface.filter = 'sepia(0.8)';
                }
                Surface.drawImage(atlasCanvas, 
                    16 * (u == 1 ? landTileChoice.x : waterTileChoice.x), 
                    16 * (u == 1 ? landTileChoice.y : waterTileChoice.y), 16, 16,
                    t % world.size * world.scale, 
                    Math.floor(t / world.size) * world.scale, 
                    world.scale, 
                    world.scale);
                
                // reset the filter
                Surface.filter = 'sepia(0)';

                // Randomly adds sprites on land
                if (u == 1 && (~~(Math.random(Date.now()) * world.size)) < 2) {
                    let r = ~~(Math.random(Date.now()) * 40) % 20;
                    const tiles = [
                        null, {x: 8, y: 6}, null, {x: 7, y: 2},
                        null, {x: 9, y: 6}, {x: 7, y: 0}, {x: 7, y: 1},
                        null, {x: 8, y: 3}, {x: 10, y: 1}, {x: 11, y: 0},
                        null, {x: 9, y: 0}, {x: 10, y: 0}, {x: 6, y: 3},
                        null, {x: 10, y: 4}, {x: 10, y: 1}, {x: 8, y: 0},
                    ];
                    if (tiles[r] != null)
                        Surface.drawImage(atlasCanvas, 
                            16 * tiles[r].x, 
                            16 * tiles[r].y, 16, 16,
                            t % world.size * world.scale, 
                            (Math.floor(t / world.size) * world.scale) - 5, // 5 pixels up to make them appear to be sitting "on" the floor tile
                            world.scale, 
                            world.scale);
                }
            });
        });
    };
    const eventListener = function(t) {
        const x = Math.round(t.clientX / world.scale);
        const y = Math.round(t.clientY / world.scale);
        // no bounds checking
        let f = mapthing[y-1][x-1];
        mapthing[y-1][x-1] = f == 0 ? 1 : 0;
        draw();
    };
    // Add remove tiles listener.
    canvas.addEventListener("mouseup", eventListener, true);
    draw();
    // need reference so that it can be removed
    return eventListener;
};