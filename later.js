!function(t, a) {
    !function(t) {
        var a, e, A, r, b = (i = performance.now(),
        j = 1,
        f = 0,
        function() {
            j++;
            var t = performance.now()
              , a = t - i;
            return a > 1e3 ? (i = t,
            j = 1) : f = Math.floor(j / (a / 1e3)),
            `${f}fps`
        }
        ), d = function() {
            var t = performance.now();
            return function() {
                var a = performance.now()
                  , e = a - t;
                return 0 != e && (t = a),
                e / 1e3
            }
        }(), x = {
            scale: 10,
            size: 58,
            textureSize: {
                w: 128,
                h: 128
            },
            loadedTextures: [1, 1, 1]
        }, u = {
            up: !1,
            down: !1,
            right: !1,
            left: !1,
            rays: !1,
            fishEye: !1,
            fovMod: !1,
            floor: !0,
            sky: !0,
            Mouse: {
                x: 0,
                y: 0,
                button: !1
            }
        }, w = null, n = null, S = 0, k = {
            x: 6.5,
            y: 6.5,
            d: 0,
            rot: 0,
            camRot: 0,
            fov: .575958653127,
            rotSpeed: .25,
            movSpeed: .6,
            preCalcCosRot: Math.cos(0),
            preCalcSinRot: Math.sin(0)
        }, l = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        var i, j, f;
        function W(t, a, e) {
            (a %= 6.283185307179586) < 0 && (a += 6.283185307179586);
            var A = e ? !(a > 4.71238898038469 || a < 1.5707963267948966) : a < 0 || a > Math.PI
              , r = e ? Math.sin(a) / Math.cos(a) : Math.cos(a) / Math.sin(a)
              , b = A ? -1 : 1
              , d = b * r;
            e || (b = (d = A ? -1 : 1) * r);
            var u = !1
              , w = e ? A ? Math.floor(t.x) : Math.ceil(t.x) : A ? Math.ceil(t.y) : Math.floor(t.y)
              , n = e ? t.y + (w - t.x) * r : t.x + (w - t.y) * r
              , S = {
                x: e ? w : n,
                y: e ? n : w
            }
              , k = function(t, a) {
                var r = Math.floor(t.x + (e && A ? -1 : 0))
                  , b = Math.floor(t.y + (e ? 0 : A ? -1 : 0))
                  , d = b * x.size + r;
                return r < x.size && b < x.size && r >= 0 && b >= 0 && d >= 0 && d < a.length ? a[d] : -2
            }
              , i = function(t, a, e) {
                return e.x += t,
                e.y += a,
                e
            }
              , j = {
                x: 0,
                y: 0
            };
            let f = k(S, l);
            if (!e || 0 == f)
                for (; !u; )
                    switch (j = i(b, d, S),
                    f = k(j, l)) {
                    case 0:
                        break;
                    case -2:
                        S = {
                            x: -1e4,
                            y: -1e4
                        },
                        u = !0;
                        break;
                    default:
                        S = j,
                        u = !0
                    }
            var W = S.x - t.x
              , M = S.y - t.y;
            return {
                x: Math.floor(S.x),
                y: Math.floor(S.y),
                dist: W * W + M * M,
                actCoords: S,
                textureId: f - 1
            }
        }
        function M(t, a) {
            return Math.ceil(a / t)
        }
        function v(t) {
            k.d = -1,
            k.camRot += k.d * (k.rotSpeed * t);
            var a = k.x + k.preCalcCosRot * (k.movSpeed * t * 1)
              , e = k.y + k.preCalcSinRot * (k.movSpeed * t * 1);
            0 == function(t, a) {
                var e = Math.floor(t.x)
                  , A = Math.floor(t.y)
                  , r = A * x.size + e;
                if (e < x.size && A < x.size && e >= 0 && A >= 0)
                    return r >= 0 && r < a.length ? a[r] : 0;
                return 0
            }({
                x: a,
                y: e
            }, l) && (k.x = k.x + k.preCalcCosRot * (k.movSpeed * t * 1),
            k.y = k.y + k.preCalcSinRot * (k.movSpeed * t * 1)),
            k.x > 35.5 && (k.x -= 28)
        }
        function c() {
            x.loadedTextures.length > 0 && setTimeout(c, 50),
            A = e.getImageData(0, 0, 384, 128),
            r = e.createImageData(320, 240),
            ScannedImageData = {
                data: function(t) {
                    let a = [];
                    for (let e = 0; e < 196608; e++)
                        a[e] = t[e];
                    return a
                }(A.data)
            },
            function e(A) {
                var w = function(t, a, e) {
                    var A = 128 * t
                      , r = 256 - A
                      , b = 4 * (a + A + (128 + A) * e + e * r)
                      , d = ScannedImageData.data[b]
                      , x = ScannedImageData.data[b + 1]
                      , u = ScannedImageData.data[b + 2];
                    return {
                        r: d,
                        g: x,
                        b: u
                    }
                };
                var n = function(t, a, e) {
                    var A = 128 * t
                      , r = 256 - A
                      , b = 4 * (a + A + (128 + A) * e + e * r)
                      , d = ScannedImageData.data[b + 1];
                    return {
                        r: d,
                        g: d,
                        b: d
                    }
                };
                var l = function(t, a, e, A) {
                    var r = e.r * A | 0
                      , b = e.g * A | 0
                      , d = e.b * A | 0;
                    t.data[a] = r > 255 ? 255 : r,
                    t.data[a + 1] = b > 255 ? 255 : b,
                    t.data[a + 2] = d > 255 ? 255 : d,
                    t.data[a + 3] = 255
                };
                a.clearRect(0, 0, 320, 240);
                var i = 160 / Math.tan(k.fov);
                for (var j = 0; j < 320; j++) {
                    var f = -160 + j
                      , c = Math.sqrt(f * f + i * i)
                      , s = Math.asin(f / c)
                      , G = W(k, s + k.camRot, !1)
                      , N = W(k, s + k.camRot, !0)
                      , y = G.dist < N.dist;
                    !function(t, e, A) {
                        var b = u.fishEye ? t.dist : Math.sqrt(t.dist) * Math.cos(s) * 2
                          , d = M(b, i)
                          , f = Math.floor(d / 2) - 100
                          , W = Math.ceil(f / Math.floor(d / 2) * (x.textureSize.w / 2)) % (x.textureSize.w / 2 - 1);
                        f > 0 ? d -= 2 * f : (f = 0,
                        W = 0);
                        var v = 100 - Math.floor(d / 2)
                          , c = Math.ceil((t.actCoords[A] - Math.floor(t.actCoords[A])) * x.textureSize.w) % (x.textureSize.w - 1)
                          , G = Math.floor(d / 2) + 100;
                        if (u.sky || u.floor)
                            for (var N = G; N < 200; N += 1) {
                                var y, L, X = 200 / (2 * N - 200), o = X / b;
                                y = t.actCoords.x,
                                L = t.actCoords.y;
                                var p = o * y + (.8 - o) * k.x
                                  , h = o * L + (.8 - o) * k.y
                                  , D = o * y + (.8 - o) * k.x
                                  , V = o * L + (.8 - o) * k.y
                                  , Z = p * x.textureSize.w % (x.textureSize.w - 1) | 0
                                  , q = h * x.textureSize.h % (x.textureSize.h - 1) | 0
                                  , P = D * x.textureSize.w % (x.textureSize.w - 1) | 0
                                  , z = V * x.textureSize.h % (x.textureSize.h - 1) | 0;
                                if (u.floor) {
                                    var H = w(1, Z, q)
                                      , R = 4 * (j + 320 * N)
                                      , J = 1 - X % 35 / 8;
                                    l(r, R, H, J)
                                }
                                if (u.sky) {
                                    var H = n(2, (P + S) % 128, (z + S) % 128)
                                      , R = 4 * (j + 320 * (199 - N))
                                      , J = 1 - X % 35 / 8;
                                    l(r, R, H, J)
                                }
                            }
                        for (var I = d, m = (128 - W) / d, N = 0; N < I; N++) {
                            var H = w(t.textureId, c, Math.floor((N + W) * m))
                              , R = 4 * (j + 320 * (N + v))
                              , J = 1 - t.dist / 20
                              , K = N / I / 2;
                            l(r, R, H, J - K)
                        }
                        a.putImageData(r, 0, 0, j, 0, 1, 240)
                    }(y ? G : N, 0, y ? "x" : "y")
                }
                S++;
                S %= 128;
                a.fillText(A, 5, 10);
                t.requestAnimationFrame(function() {
                    v(d()),
                    e(b())
                })
            }()
        }
        var s = function(a, e) {
            switch (void 0 === a && (a = t.event),
            [69, 70, 32, 38, 37, 40, 39, 49, 50].indexOf(a.which || a.keyCode)) {
            case 0:
                u.fovMod = !0;
                break;
            case 1:
                u.fishEye = !u.fishEye;
                break;
            case 2:
                u.rays = !u.rays;
                break;
            case 3:
                u.up = !0;
                break;
            case 4:
                u.left = !0;
                break;
            case 5:
                u.down = !0;
                break;
            case 6:
                u.right = !0;
                break;
            case 7:
                u.floor = !u.floor;
                break;
            case 8:
                u.sky = !u.sky;
                break;
            default:
                return
            }
            a.returnValue = !1,
            a.preventDefault && a.preventDefault()
        }
          , G = function(a, e) {
            switch (void 0 === a && (a = t.event),
            [69, 38, 37, 40, 39].indexOf(a.which || a.keyCode)) {
            case 0:
                u.fovMod = !1;
                break;
            case 1:
                u.up = !1;
                break;
            case 2:
                u.left = !1;
                break;
            case 3:
                u.down = !1;
                break;
            case 4:
                u.right = !1;
                break;
            default:
                return
            }
            a.returnValue = !1,
            a.preventDefault && a.preventDefault()
        };
        !function() {
            var t = document.getElementById("cSurface")
              , A = document.getElementById("atlas")
              , r = document.createElement("canvas");
            if (!t.getContext)
                return;
            (a = t.getContext("2d")).fillStyle = "rgb(0,0,0)",
            a.font = "10px serif",
            A.width = 384,
            A.height = 128,
            e = A.getContext("2d"),
            r.width = 320,
            r.height = 240,
            r.getContext("2d"),
            (w = new Image).src = "data:image/false;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACAAIADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDjfg/4q+Lnw61rxBoelSaFqw8ULu1DTvENlJqNrN9k8xt6K9jgNGJGzJGS4BGGHAr0O98UfE65ga3XS/hrY6Lbzw3E1v4avZLVbh4xIAS8ltLI7fON26QIdkZIJRSLMnhnS7jwjqXiy3n0fU9H0i9+228VvceZLAJreGBC8Mzb/MEdshbczKoszlVP38v4hfFLwzregJdRaewvo0Bl+zADe2eV3AsSxzjPy59xxXztOVJRcpNprpd/lf8AA9qpTnzJRSs/JEOqfEnxRq0siTxxQRmMSBDq7SeWevzMIo1ZuccEgc+5rn/hlfeNvi78U5vCnh3Q5tU1eRyo8tYrkXTmJZcrtYOwUN/EAcpIcbQxHPwfEmS6s9PWG70+S8O1lVvJkJQ5LB8gkhcjk4yU6kkLVz4VfEa++G/jq41aOVNN1Z9ZtpVmtISYbaWO3tXjZN64GHiX5cZyTxjmnBwnLmbf5Eyc4x5UeoePv2I/jL4EuIrnxb4Y1DQbOxmgM+sqIrmO1JYlTtG5W3bfLVs7VLjuNtcd4rs9b8K6p5eneLU820jZMT21vJcLhTgBwoO4gYycE55zk17vf/tiW/7SUFvpPh3XNaaWSOS41zTNcXG9okhleGNjG4lJaCNEZgrqIVZxtyw8Tu/7Y+JvjS8sGW2fRNPW3a/8hIbVmabzSu0rGd4CqjDeDjlc85CjWvrSVwcFtUdjj/h58JPFPx+sLy/8H3/jfXfLvryG6eysI4rX7REJJLiGKeW38qRoiGMiozlFzuHIqzrH7MfjjwRcTC4n+LWnxxRt5wt9A+3JPtIVlLW9mw4YqwORnoRgeYO8/Za8H2/xY8GtBc+XYmW31O1W8uZFmacS2N7HCjxeXiaMyKSGZkKKI9gJYY0viZ8NLy1/Zx8Nw2kd80f9oHThJcmKWxXYPtGY5Ytw85rhriNducpH93Lb3qpGmtXBXfkFPn25nY8EvfEHjjwz4jks9a8VfEHTpLFgzJqNtsniWQbmEcckK+YzICdiZd8Ywciuk0/x5of9oReHbjxF45vNcvVN0v2O1itLeCD5kE8scmnv8xxv8rdGdvGScFi08jxTp62VxcabYqv/AB7zyeUlv5aZKufLwzMcMQPncheCAAq+iaB4abwjDM2saLba1Hayi1um/tKfT4LZwUJjJAJ3HzY1G/crbyVBwrBaKyt9yRW+v53PE9M8LaH498b3Wk6PD4g8Ra1G0f2kJbGSazkaRhmUtb7UypJIbbtCjAXv6p8Lfhz8Nfh3rCWfxUs/iZo66gBc2UukavCBbRvKVTZH9mmaTfGAATjJXqchlo/s2+N/Cfjn4o+JGXULex0G7lawurjZ5ghnjgtf9SzbCFDrvQhtwV2Ic8OfUPjFq/wt1/xBoutTalrN/JbWJ07xCrwYGqOsckYmgQK/mMGMZcZQEFWTJMkiX7SOj5dPQz9npbmOJ+Mev/AuL4q3Hg3wzpnxk8SzW0cVwy6frRlEkMkCTrJldHc7RCySsQxwH5K7eHaz+xNefFnwx4iuPh/4T8bGSOBJrCxvPEFpdr5xdmaKeTybfywyqyqDESNwV2UkVX8D+ItM0j9r3XLjVE03TfD8n2ewuLyBv7StlMWk20JxuMLSxNIoyGCcOQzsqDPpHwZufCdz8bPGWn+JNTsxrWqaqkmjn+ydsdzLa+QmyaRUmhkWdYGUOjAzKVJEckmKKlt7Lbsuv9dwp6dXv3PjHS77x54H8Qrpmt+A9b8H2ttJCkkr3dpeW53pHOjI9n5xlVkkRwVDL86nI27h654n+CPxTg0CDxJc6locOj3w8yInX0EI+ZSu/NvhJACnDDgkcg11H7Q2rNcftrz6fod9b+G9EsbnT7GQ6bGk1o0I06yQ5gjPlvCjqAi8KiJ8qqcKO215RoC6ba2via8jijvZL4WX9si8eA2y3bBolGZISsLPP5bFmEkarkuwzjK0IWit7dX8+36mqipz979P6/I83+BWg6p8QfFGsaP/AGTdDxRNaS6feahZaraLHe2zBJvLdHzDIRuQEuwOYoowEcOT3Hi34Faf4J8NNqeqeAdLs7e6uI7VfJjeWNrlyEKJNvZFzIG4PCKM8DFee/BT9ln48/s0eDNQ1DxJ4O8VaOmk396jau+yfzLEzO6SsVd32+VFuLEA4jbcflYCv4n+MNxaR/2xc+KrOOXWx/Z6TjV4/tV3bzqXkgGGLvbP8pKAFN3XBkXdfLyu/wDwfuF7S6t/XzD4paF4Z8C6pHpWreGrXSb64yIrae1mtZhtaPdsHDDBliGdvBkAyMgUXHwVh8JaRp8lp8O9Ss4dbxqdskLy4vIm2r9pEcbEyDlVZ8YUHJIrj9Q+J+l+I/EGk6Hb6xa6ivhWzv4J7SJPtL2IM0LOzqmSriUnLuM/KqnHyle4+FP7Rugnxjb2uueIr66XRdLkOmrHoEusTQTTXFugSEHOAYrV1HmYVQhjGAxpew5eoe25uhmjwmvgqO81abRfEkcM1vLFbG3069uMTS28zR/PCpyWRZGIDfKisTwDnsvh/rMfhfV5G0PQ9cW911oceRp11M1yoLCLbvQMynLAOCB3yRmvQBYaX8SvC/iOxs9P+IV5qjaDcRSaXd+FruRZ3RxFBcwSbfMVY/MRJTPHvbzUbfu2FdCa41LUNauNJTwF8eGgvmdIltvBjaf9nYM0irHH5LB/LEjEK02PnfIYO2ZjdR938hySb978zzD4X/tRWLRrDcWXjixhl023i06Z41a1uJfIiUK5jUGL5wPLllbJMC7l+7Xp/wANvjdF4q+D+peA9W8QeIvDdxZ3/wBu8Nala+GTeNandOb0N9oZQxgmdN6I+Y3mTCyoWxsfFHwRrXxF0DSvJ+GvxY17wnYNcyRpY+GjEPtUxZfNISLO4sY3f96wwpHzMcnxfRPFetfDv9piPwvZ/Dv4jeGtcuLpp9O0KXw1dLqEmGwl1awukwXZvgIKu7KsY/erhmG0qfNG2v3Mz5uWXT7yrc+GfCev/EK90m3b4jJPb28U1xHbfD+7kspEcrskgu1neJ4HBVo38xi4dduSpA9y+BH7UPh2X4Y+IdF0nVfiZrei3+ky6W2n33g6eG3W5tYBBmOSdraIyqwAJHl7W2GQkKWbH0Lw58UtY8e6TZ6p8O/ileaxpdvHp2m3Gp6LHChtkeULbMbokbvtE25WEqljGvysRz478S/gN8fPBWi+JvGmp/CHxtY6Pb+I7rWhdabDFJHYyz3HnQn7PFIxe3hWRCZ4l8tFDIZVRCFhwmuj/H/IvmT6o818PeGNb0n4w+Ir7S/h3rT2Hiy5tddNpZalpt0kU72UZliQR3IdUVIcq7A78PINycDrNS1uHxJ4zm8L6D4R8XWvi7R5pp9Ssnb7Y3ktbRXEe2VUSGUpDukYRsxCuCcBGVdLwlovizx/eSWh0DS/D8ypHC41nx3pVjG6o5kYBzcJGAWd3AVfm37wSSGfsdMX9ob4Sahrsuo/DPX7e3DRXcMmn/Y9TtXjgiTE0bQyvA7IVmG7Llg0mQdxq4885c3K/wCvkZy5Yq10edan8KPHOia1NdQ+Eb77LqU8Mtrcu9sqzRrFFEHBMhLASK6EFe2CrAkm/pHwh+Kbm3vNP8N2dr5V5HFI+o+JdKsbi3ZUDDy0luEfzNwG3CAHa+05TA6Pwr8fPE3xs0ePUtQvZlt9QMpFvqUhspI8sEc/ZmYeWA0eCuxTlVJXjdUmvaFP4f8ADel6xI1rqGn61dzWIa1u4y1pPGEZo5yTgZRg6gE8Ak44BfOm9U0Tyu2mp43P4i8QaH8UNR1do7q38RC4WaSWPU1YxsY0QMs4fnaRnO4cLuA9fUPH2rfFDxL4CurrUtJ8IatHDDEssjazY3NwikC2hkeKO4+URmVAhZBgmPIZAa6jw/8Aso+PviH4NtfFWg+E49Q0PVLeKWKc+JtEgMcZG75xJeKyMo5ZGAZNpyowRUegfsqfFPUYbrRdP8H6hYw3SSxi5stf0C8mgkRW3bES9Z8glMiMYOFOGIUjOtJSmrde/wDSNKMXGLPHbX4u/FLwTokyz6hq8yWoeGBzfR3EUylfKKRyMxdldY1Qqn3lSNSCFRR0Nt4TvH18XGjWd5qUPEcv2EeYrMCFAPQbixjHTOeDj+H039pzwiNJ8ZXa2OnyWTSahNdxyy67pdmkiXAaRgkD3SMI4pEUYG5gZAOVDyV5boHjjUPhn4ujh1Wx1i60vTria1mtrTVLOZb2ORUilS3ldnhUOETJYfM0aNuwqkzG3L7un9fkaO/Mr6nYeFfCnhXw/p199okvrPUJHlnSHStK3R3ThOEklwhibzdpEh81WRnwOATH+zV4QtYPjL4w0zw/JZq+rkSR3sM7afG8psLDCmR4ztK7TGzvGyJtLHci1veKf2hPB/i74caL4Zsfhr8Q9H8WfZoVn1e21CKSxjg3vFtlmabcrJCUI2JIx2DGWw1fN/7P2keKPhF47bwfY2d1dX+pahNc6Ve29xHaxCyDQRhWnbaFZWkhG09Gct0WRl1jGdr3+Rm5RT2PrT9qn4ea9YweBdatPI1y4XRrxdcgs5leTS547i1CXMdqoDxxuWk3uq+SjqASrtl/IPil4y1LTLmz07xzP4vkWRpktF1Ka4niZI/LicQybij7GeJCFclTtRsFNq7fjrwV4g8PeD18RX+o6ft1eRWOy9Mk1zujBkIbbiVf3oVtpZOQCQW2t5h4u8S32jeCdP1iHTb6bTvDNz/YQ0mGRVmt3u3JAUMAiqrxSFgWDrvQnjgqFNS3JnJ3uez/AA+17xH4MhmWz8FeKtYl1bTxqGLfQW1a4a2AQfaMRLKqKispDSISgdCQvytXB/tX/ti3XxF/aK8P6lJ4F+IEH/CL+FpLG/N/ot26z3NxfGc/uZZS3kmNbdhEo+VhIQoRwaNN8LeLPFHg/StS1S4TwhY2ai9sJdW1Xd5JaSQKY1tllkgdjAxAkEYDRs24Ahj2HxL/AGcPHd2upeIr74j/AAw1zWNbEt1bQ2eqyyXeoTQ2z3ZjT/RF8md1hkVtwUGQAOxEharjU5NNfw/y6C9m5ahoH7Ynxe+PBZ9B8BfFKKXUL5Tbt4c0DVII7N1V/OgQYX7SrSFbhkmLFXDPuPmyFtDW/wBmr43a98NdcWx8G/EvVLr7HcTrYJDdSXcjvGAF+zPLhC2RlSSOTnG6vN/C2v8AxS0/WooNMudQsdH8QXkV1Nf299ILGNjIMy+XBjzdqMykIHUxkArIpCn0D4t/Bf4heG/GdpqF34g0a6ujbrb6dd6fFOt1ZRRxlpDK0eWWJApIZFYKsTnLpsNYSqKMryu/K6/RGsabkrK34i+J/wBpzSdGSHTvGXge+HiTStMOm63FfeG7zSb2WdVG2acqsf747pvMU5DDYU27RiLRf2i77xppulah4U8O+PLrUvB9zHbjV44Z5FhlykyxbiiIpO+BkAOSepdnJHRTfG+x8YnRW8f+A44/FGipcrqet/8ACTxiLWzbfupfPDhtt6jRjEbSgFmB2r52+vMdF/ap8PeH9d+Kmn+BdW8K+H73xNdW2uWy6loyzaPaQyxsqwGUSJHbsZoJwq7wGQOCjBs1rTrczs7ryuvzMqlPl1X6mL4q+I2sa/4p1x9c8N3WjahqWt3ly8VzpS2zxPPdTTNhfmUA7wwRWG3O0qCMVpWniKbSfDa2t43m6RfPFqcMWmi1a/mYebAof5iE2qZP3cjIwzuBXPPoV5+2FrPiXxBperePLT4ViGO0ihvb3StKjvtQvCuxGCia3YSK8asuGuYE5HQgivGbW0sNS8S6q2hMsejm/llsnSB2SOEudkWSZGDBdo/eSE8fMxIzWPtk6u23nf8AI1VL93e/4HOjUdY1mSOZvDuqI9vpyRXMUSxT3Um2Jd0ZWJm8w5GPk354wCcAael/su/ELWvEen2lroMUN5rFtb6jp0FzewwzTQ3Fs1zE4wx25iUna+whsKRuIB3dW+IL/Dqyurmax/tuRWVYLDTYU+2zl2C4Cb0JxuJZmKqqgsWVVyPsb4P+JLXSNS0nWvF+ueCX0TT7O50RtK1DxVC04kMzbCiBZLObKWk1uzpJIkiglmyd9acseRzirsFKSlySeh43+1b8Pr7Rrvw211DcaPH/AGVHq1611eLdw3FyLe2iujE6Io/dybvmCLGxdvlQq615jZyDxfCtrq+pWGlzeWrG5uppZV2janAWMkkKpYoDnaMjghF+nNa+Ksv7U3wc8NzN4oks/GNjNPpl/bDwhqeoQ6nEgYtF9ptoJ5IpZYrjbl4mcmXehBbZXzdpV38L/HnxA1jSdE+J2nX81ikb3mhQ+H9Tk1ixkVzFMrRpDt2o726q0pi/eNcBjGRErZU3pZ7ly3ujtdD8HXHhS3vZJbPTfEC6Wv2TUDeRyQ29rvAcZ/dho8qpMcy+WzNE4XGCTwNp8aNJ8SftIQrp1xZafqnh6Z/7SnsV/wBFtRLPbNGYFIACxGN8tlskAZDJz9S/sk/tW+DLS8/sfw/8SNQ8X6ZLYW+k3el23ha71GMmNBC8ssNowOAm6PIYP88JdlMYFfE3xZ0+40/49W3jSx+HvxStdP1jSZdOv55fBuowQl7e78qCV98Csjz75JQJAhVDEpUSBt2tON1zPoZzlrZbH11418TfCOT4b6v4ULalqH229fWNIvvNjEOjyvEyt5xSBZDAZAjSi3SSWTeG2Kybh4t8dPGGm+I/g5pth4atrRZm1WwhuorpUkkuri2glkWQmZJTPbeakRHmeUd6K+MRsp5a++KngfTtGsYtY0/xZot/rVvJBpcl4jxwXt0gJ/dB4kZjwNyqzEBmOACCM/WrDVNU8O208Oj6xPcWt9AzpLpsu+3wrENIuC6feUbsHBYEZOKqlTvLS5NSpoexeJ/GFj4o/ZOsdNsdcuLXVg0ena3assfk20L7gsvlhPNmibyYmcRA7HMZDbtxr3LQvjF4TvfgL4y8SaBfyNeWvha6ttatL554Ptdza2s7RSKZIfLPmgllH7t3IYkFkOz4tsLbxNqkj2tp4a8Q3MjSsqQWemSSSO2+MY27N/LFMAZUlsgbjk6nivwx8VPBXg7xJHqngPxhoej3UT6dM0ix20cgKMv77bIWDjc6+XMYzycIC3Ney5nytNE+2aXMtR37NnhpdX8ceJprzUJFbULQ7Lcuf7Pv5hhMTNjC5UqUcFX3qoV0kwV9Q8S2fhfwpq8QjurGbT9L0x9Ql05NTkvobKK4uIt0e4RrH5ccoiUgJ8yPKxWThl8P+DPj7xR4P1mH/hD4dUuLi4IZHtZ0YP5eN/yNleCqtlgSCgb5dvHcfF7UvilNYaXca78M5rGaYqun3Xm20jLLHsmd4okdVVihJ+UMqo8m0KemFVNzszajJKN/+CeitZw+DPCOpeOtG1Tw5rM3hy/l1LTxDFGDDPcKD5z2crSID5IgnkARGxaOjBjGtZGo/tk6zq19pMq/Dn4M6hqVuTHqVzdeDdNaDVTmMpJtFsNkgZpMEvgJs2gYkc+Z+E/EcM3gzxC0djr2jeKrzR3sr6b5PKvkAcHMRIbfJmBncBtjWwkHLnHtH7MXwJ+B/jo2+m+JNd+LGi61Jd/YYrk69ai2vJBnbHtXT5GjAOI+GfnuN206YfnV1fTz06ejIxHK7P8ALXqdQ37X3w31LwfpaeNvgp8I7rULO0uYbySLwNpnlRO24QzQyOCNpBUtD9nbG1sSN5gEfJa3+3r4X1PR4pdM/Z+/Z4sUtLUWyT6l8PLe6mlcnczF1ZEVJOAy45ZWIIyMc/8AEzRvgvpfiySxhtfipfafa3HzSxeNdPjjZcj5gTpR4AJGM9vvHOaoXf7Knhfxj4Y1rWNOn8beH/DiWLX0M1/rWn3rmNWkWXKqIJJixSRYwkIVvnUsGXkl7Zy+NW+f52Ji6fLblf4FX4p/taeF/iNZJo/hr4M/DHwrfX+o6eYrzw34ei0u6sJlcSO/mwqI3jOzewcblBb5iEDH1KX4aad4n+FF1q11NZ2dz/aem6hLbRXEsS39sq3CTF32iOGXMkOWYOr4RVRGIVvJoNK+HfwIjt9Y0LU/iRq0lncTx2MKeGYY3uZDazsQ8ULTzB3JYKqRujBc78jYOpg+Ouj+OPhyLOLVtWivrNpbXUbLULW8tbjRkZgsqzSSQKPJZ4oMSbHVGQKXLh0VUeZR993NKnK37qOd+HHxl8LrpmpCa80e4juNIksbfUr9Umjliw4VJIjuRvLDAKZPOAaMbWh+VB20H7Xfhvxf4zuNY1jxd4Ug1B/s/nWKyPHY+baRRrFdJ9ndlLSTQqS7jIEjoTzuHM+EPiZ4O/Z//b7+LGsaXa+CrXQ/D/iy0iaXTdCs7y0tBHo9oL77NHcZUQSzPIBIjrIsSIQ78o/s0P8AwUft/CXiRNc8D6P4Tt9ah1CWKGSfSFiutQskhVLa4SW2EKqJAr+db3AYK0iNHwT5elSMIu0ppP0/4JlTlJq6i/6+R8dav+1bo1vrHiS1sdX/AOEf0zVvFeqaxpkQulWNrJ7qdoBHuYHfgqfNU4wozv3HPQ+FvjBpPjye1vtKh1ZNUb7VPI2m6cjQo0io2yOUZLgvkgoEC58xF3uTXv2q/t+/Ezx74J8QeG9ah8Laro/iIhdXsrvw3BcRaomxQRfLKriUPxH++G9kSIZBDM3N/CTU/C3jn4T+DfFFxrGr+FfElwEttUW0uY3BiaNY4bkJ5kUzLtjfeF3MilF2qqqKxVKMlzKTsae0cXZo8z1P9p2PSfiL4e03xDod9q2pWPmXYfxBp0lwqu4RQrpOhVY3SSQBvvsoILNtbHpnh3/goF/bWqWuh+G38PQ3ltCmnlLO6W71SW1RURLeRZN7MFRIwNsa4KrjHAr0s/tA6xqfgvXND1fx3p/iyPTZpDpl9r4m1iTeziU7IriGbI/dPGXbb/rUYqCgI8Q+Nnjjwn4k1rwxq8vhuz0bxVHpup6XrN9plpFCuoWwns3t8xxgiPYRIG2AqwCsVDFidpU48tufb0/pGXtJc235nSS2HjHxpbx2VnoPiaea6QJ/Z8dlMzXbxx/MixqgLYXrtQnaeeMmuR1XWLPVLy4tLrU4xfCU28sNxMPNWVQ4aJw3zb1CPkMMgI3oTXLHX3sZnutNmuiunSZjubZ0U28iHIIkVeGU4OTyD6cGur8cfEy8t/izJ4+0j7Z4dt9S8Q3eqadI3+jXMLSQXUiYiT92rlA5KIzIu5lA2jBzhJ3bRUoqyuclcaJa6PGquzafNCpuBM0DRlBkHcG7gM3UHgkg9arT/Fa6uNPg0XwVqvhd9Ys7x7t47rVorZ59saxR4GHTzPmdMsq/K3JPJrstb/4KSfGTX9Akt2+IOpeTau4icW0EG8MuNhVYlXBHJ+XJONxO1duNoX/BVb43eGZEE3xG1ae3CLE1lqUMVzb3CrtwCrphhgAE5yQAM4wKyadR7X/A6I+4r31OQ+Bnx6+In7X3w/kkuNH0Xwv4ch/0qxfULex0+QyMhUCNra2ErK4fL7uG2DdlgMdna/CXxtp2pSQx634Nu2muTKbWbWLoRozFmw0TQ4IIducDrjB6Ht9Z/wCCpmtfE3wVcWPibw/4dvtLuY5EnSK1hjjG5QDIo8oyCRBvZGWRMfLu3sDK9Sz+Ndx4c06G1tbMC4ujHEksVo0jo5ACBYzGxLMQcBcE4OB1xcY0WmpJ793f8zKXtL3VvuRs6140+JN7qB1bXtH+A9/rjMmL/wAq5tblmVs7jHGsdqz8H55IHLAHO481kfD7xdJbfEHxZqnjDXvBdjdW1raQW0tzrbSPPbyC++1CJ0ihZnc+QTJJwpETFsndXNxftRi/+H3iS4tIL7W7ZrO8imuY7aSXynWFnI3bGVWRVZjjaQME4C12+lftU3t2zTtongXxYt1sMc2reH7cyAg5VlaNFDdMNv371PUHDC5Om1eN7+d3+bIXMn71rfJfkdl4OuPAPjbUrb7d40+HOqaXsiuLqwEK6XJYXaztHE0cTsI7hHjZvMljkCRmRhs2mUT+d+PdV+HGv67rWp6l4s8LeHWt7Z0t9N0m5gtbNUS3eKRkjkkUopkjWQx7VFwLll/csMPJp3xg8TaU2yyXwvZ2K3UlysUegWUTRueg88wszqqjAjfcnGSuea94+Gf7WFjqVxoba1a+E9RuII5baZ7/AMP6TDauhV1WUIsKmUDEZIJgkwXGyQhSqpLpf8P+CVUkmtvxPzx0n4Q/DCLUYi2gzWf2jUnnuPKlnWSAHaDIsiv5mSAuUVRgRjkn7vqHwcm+B/gDQbX+3Pg7a+IdTgvEjNzqfiLVWguI2G0NIgaT5omXGE2q4YZK+WFftvGH/BPm68E6m0dx8U/g3Zss726yLqF3dwQSLjG82trI8SkEndIiAbXyfulvN/FfwJ8UaDZM1v4u8B6wsdz9nYaZdz3W9hnDkNCCEO04fp+JxQ/ayWtvwX6h+7i/+HPZLv8Aa3+H/hrW7fS9N+FHwr1LR7awRNQ0+80mdlbzVdN0E4ZZNrLHJkvl8uwYFQpa3qf7Kvgv9of4ZR+NvhRoVn4J0nTE+z6t4R0zxBOttpLh40MwgeXEcTbmcBFZcEjblQ7fL3iXwX4+v7e8ntZNGvo7eGW4KW7Sx/Ko3MzYhwFxg7z0HOa7D4K/DqTUbvTZ9U+LHw38JtfDzWS5TWZZ7QgBQJPJtCobncCXAABJIxisp/WU1y2t8v8AMuPsWnzXv8/8jvB+xxpPw5/aI+H+j+Ilj8VaT4iiuJL6ys4rzU5LUGNgBDFHsa4xHJFcR+WfmxGCGDA1sJ4c/ZP+JWi+IvsPiLwrovijwve/6PcWGilphayBgkDLP9kdCzLGA27c20BhIVybnib9ivxV43tNG1Tw3+1F8IrnSfBmoQ3V3dWGrXi3mnxNC+6NUktrhEDfL87xnlVwCwUDsvA//BPzx18RdPuLmX4j/sw6w1vDE0dxbavesuS8aRqzSWbJvMmxf3YX5wqiMNxXXCNXk7Pyt/mc0uRSstV53/yPHfiP8LrT4M+FdE8VeHdRj1qzuLt7CRtX8PRmNjNC0iTRLKZYijJk78703RsjMHDLwF54c0PxHcyXGtabpt1NCAsd7c6bDPJGMkDY7DrhjjBHXHAJr6b0b/glj8dvEjPotx4v+Cuj6HCi6hJp9vr95ZWNuqK6LI8KadFHHKFLqJGj3sPN5ZQxoH/BNb4iaPbJZp48/Zvm1SSAyJb/APCxppGljCFvlP8AZiySLsDN9w4C8EnJrkpxrRi3N697r/hjqqeyk0o/kz511H4WeFtW8DtJbWOhfaoXimt5lj8hkbeoHmBPL8yLnlHbawyOu2qPhnwfeeHLi+bStH8A3V1ZqkMNvr+gQahazHzAxeQMuGXbuAXYSOAWYdPTvjZ+x/8AGb4X3Gi/6V8Nbi1vH+2P/Z+tTz74Y3XzBFLHGzF8uuVZUYcEZJ41vhNosN5rDW+sada2MlvMsT3+lym5u3TYVbb5ksZyrCKQMHAbEiYCEIvao1ZQTSun8/yOaLpxk03r9xwXxR+GWpWviDSbHUPh/wCAdCvPEMsFndTL4VOk/ZWitzulhtCyrmRrdgQfLTdM7nfkqfYdS8S658E/hrptx4S1C1tdR1bVrexfUbawW1SK8s2imjLLC7xlsjKqI2Cwytj5ncL5X8W/DXiLTPHNlf6DNDL8P9Jug0qSTj7V9pG+G2kZN8qllFxs2hgVDuQMMNvqHi/9o74ja34FuGkV7fw3dJbzzR2xYW7uHXyZQQ+53WVI2DK2C6DcHGVrGopqyki4yg7uLZjp8WviFqv7TOjw6lD4NN14kth4h1ODxBZSXkkMs17qCPFHF9ojIg8uKUeSGyPNc5LIMZPgP9iP4e+NtSj0vWrjxxqc3g1IrK3i0C8s7W0vJ5U+RZXWb5GMjRxKJN/lkuhYAhl5e7+Kep23xn0nxVNeR/27oun2jW88jFI5Ss9yzMYF2xBXY5KoApyVxXY+Df2rdQ+FvjnXde0/T7a7tdcZpNQ0UxOzapwrpBHwJRsZFEYADhVCkkbqd3F6bh7r32E1nSPh/wDD34vz+DYfhl8Pry6t7tsRaxda5e3k1vuyFiMN/wDZpLhV2gHZ87gGOJlZa5268VfDO98Yaxa658PY5NHuJrp7S5sdR1NLyw8ze8cLIt3GkkKuVXayrIFUqHwFFdF8KPgr+0d8XfjtqXxAb9njxRpX/CQajdyQ2+v6tDZl1upGKwpLdHlgjKodXY/u15ODXb2H/BJT4teK7bUNX+IE/g3wjq0N86ol3eLfKkUkigRvPE8zNIqNEp+UtI2DgAFq1qRqfaM4yp/ZOb139orwD4+8PmTWvG0cHiG0eB7S6g8xZJYguJIGiVoowdzs3mebkAHaQSEXnvFfivwDrNlBHp3i5dShhgigiN39klkjK4BZ8MrH5ML91gpUbcgBq8qk8A6br3i26tNJi0GC6hdzDDEscMjIp5UEgcgDnJHQ4zivS/hj8NNH06/0O1uI9Hgu78tfRz31tcQW97bAOCm9UlLOJkeMNbgM5iddwz8/JG0Vo0/l/wDbHRKPNv8An/wDnfHHjTw/4T8OahHpfirR1urixurO4Mpt9rpIij93sbzVYJuGSW69Fzz5qfiFcXkMccOmacX3mKOdZxuUqRngHO4c8c9iV9fp7xj4Y1q1g8rUG0C9Mt6tju0fRoLOO0cqjLJmG1QyRTfaISA481X+UIoYBuT1H4U+LmstQ1ZtD1RvDOm3H2m/v103zrW1XOC/KhWXcUBOcDg4XaM60+Xlvf1/q5nK6dren9WPGz8SvDosf7N1DUNO0cXFu9vdWE9yy74pDG7LIjkb0ZkiLIwwfKUkHaBXZfDD4x6P8OLz+1vDPiuw03VJbeWxa5tb+N4zBMf3kGxiU8twBlMFWIDY4GPWv2Wv2ofEn7NviXytJ1jTre1vPPlvoP3Ma3wlmlI+V1MbMNshDeWCPNAyd2G98+Pf7cXj/wCJPwS0XxL4f0e/s9HVWsdXmTS4JtLs53Ub4AWhwA+6GRdxYHaApJ3LHoop+65fctfzM22tUvxPhXxf+0ffeLf7PsW8TeZpejwtY2cRlEiwQHJMKJtUJF8v3VwAecbgMY7/ABNnXUFbw6rX03ktCZdLhVBsf5WSTyxzGWz95iWVTkcEH6q8D/FL4pfGbRV0HVbySPw3qV4beW8HhqyvBbsVQO1uqwmTzE/dgmMKFMiFnjMgkHbXnw6+E+leItF0/wCKWi+AdY/tqCWxv9R8TaT/AGeNKKSwlnQi7d4yolJLhlC/uykQXeV5fqsGn7z+f/DnQsRK6dl/XyPkHwUyx6WsN02lx3ly7QRILJYLWBXIaRkWJ4xu+UADO5gFzsReOg1fxFY6MPs58UXMM0IkeK0tbv8AcTZIfGxxIq469epHU4xD+x/8b/g54c+BO3xR4N8IeNdR1G3huYIbyOKW52s7lw120pa3kjgeM7doDtGP3kZxn0x/2mfh/dXNjp3h/wCDn7Peo6PpMs0Yn/4RK3uJrqIFwGZZ987fKI9iTl1XzHZ/MZIzHpGNKmuVyV/66XM5e0qPm1PF/EvijR9QtbHwzqWu6bcx6pco9xbNfvFM0jMW+9DtbACh8jcB5ZG5lIB1NNtfhfrfi3QY/wC09S0thZX73Wm2uq3Fxb6h81s9us58xnKr8yt5Z3KspOZGjjI7D4WRfD3xXqXjK7h03Q/AuraBrsEsEGgWtvcWriaPzbhGjaRBGytLCyhSiKqypHEq7UXvPGHxF8D6v4dvH1q0+FHibVNPuQtnqcugx6fcaha4cGJvs8MTHG9drSTcCEJsXcWO0/eknKS+7/gmMLQjZI5TxdH8GdSZoNH0zWGuYWAS51TU/LaaNd7JG8UYK/I54YSZYOQ2flauc1XVfB/g3Spbyz8K+C7e50udL23vrhDcXNoV2qHieaVhG2NxzFtYZILbSQegfwH4B07wY1zo/hvRdM07UJWultLK23IGly5C/MzFQWxklvlCgkkZrzvX/A/h3w5ewpHZPay+ayyJJCeIzjG1cn/a6jPT3rONS75ZP8P+CbcrWsUe1aX/AMFQde8Ix6hH/wAJjpuoW95EQsGomCaGVgwbLBh84278bifvsOQcCO8/4KCaL44GoNqGsTGS9E5EkqW9wloroygwBWXypEEjKsi/wxxKwIBNeNT+GtP8UXix6PotnJOymLy1tBIWPynailCd/B9fvEDFaGt/CrRdNAuvFHhPS7eWF4Ps8N/o8UUyP9oWJJ4/NUlGTzCN3yliNuGOaHQqPWVTT0/4IKpFL4Px/wCAdHJ8H49FP2WO+tVs4Vk3F0LeZJwwO/cFX5QcgoSSQeMYNePw3fapFNby6xZ6WqjzI2eFCwJOACY7pQxJC5L4JAHUAVY8SfFGPUhJbq9jcx7ldiAi4x6FTjse3OO+CazT46fUI/M0/RppbxGCxtH5TPGGKqG4yxbJA4GCT1GaxlGk9oa/M2UpreQeM/hh4o1vSrHT7X4oWd9YzFI47VtNdo4OXRVPl3IC58xup+bzGJyCSPK/2ePhn8cPip8TtWj8QXGj6L4e8M3t7o0WqRWtzDJfQwTPA32eN7gkLJ5Zx1G1s5PSvSksph4mt7+Syu7DdKJjE9u6+aV+Y4wuNi46dMZ7EityH4v2enSLHeXFytul3LcRBy9ukw85irbWIUAqF4wwAwOnFHsqHWK/En2lXpL8jP1P9l2z0/UYt3jDxBFfMHMUY0uGRIQXLbQkZ+VRnCkjOBk5OSei8E/Bzxj4C8u80H4teNPDjTQ7CdPspbeR0J/1bmKSMuCf4cFcLyOOY7j9odbG8SaG8tbi6jXckDxlTuOMfKhGT82MqDzghRkisTU/j1eT6rHdXA1SRv3hSN4bh4YyVYNgNgNySwK4GcfjpJ0G+aUdfn+n9eZnH2vwp/18zT+I2keLPFdrdDVviVdaxK5AiPiDSpLhowEKBgTMoUYwARnIbuDXMeF/hpJ4S0LW9Nu7XQ/ElhqFmsUA1bwlHez2DYyZ7RixliYjdkZAwykruUOLPxL/AGlZvF/hzy/sf+lRRsivLburFgpRieOcYIxnr2rkJ/EklwINtvr1hHDCdt2LRvMVSi4VW+cjGFJ4A+XhSTxlKdD2l6a176/qaxjV5Pe27aHb/sUfsWW/7UfxEfTEh+D+gtpV1KunTaz4bW5tpktpZkMYilLxsdiAmIrtO2QDAUE/XXiL9k34rfD7wHrV14Z134B2un2YZprvwpolnZPpyhfNJUeSu9lCygK5kOMjaGVGr4l+EPxO1bwfLpusaNp8t5MlxdX9mbm1lVbiUXbuvnIYxhHVuRtIYOQQFBx7BZ/tRr8RtP1zWJxdeAbySCO3TRLUN9iEM0i+Zt3kkHbbxkqAAqmNFLLgLvPEaqKV36syVKycunyM/wAV/EzwX+0Dda14c+LMfhez8VeG383RPEmleEbeN9RfySGtb3yFDHMjJtbaQrKzHnGee0nSvhL8IfjxouoaGNG8R2uqeHby3Sz1qa3s5L3UvMjkWO3Z7OXy5wojwDHIheCTDIjEjyvwh450ePxBq3ia98PeAdevrvWLi6k/t+G4nLoskiBAonjTy227h8oZsrg4IFepal8X/APinRvtN1+z38G59cx5dtcaNFqNlbw2jqIrgN5d458114DYwvQ4JL0U41FN3lp2HKUOVWjr3Op0H49QTeGPD9hqHhnx34Hks4zDfT3niKwmitxHuOWaKIs6lBhVihPOMkfMR4943RtR8c65pkesQ6tZ299PFa3qvEDe26yMEmUhASzKA3yoOoOBXv8A4c8f/s8674FtrPxh8C9K0Fre8kDwaLrWpxpFbGLKSjF2u8iQ7GiMke0ASK5OUTnrn9oH4E2fh9V0H4A6RbrBDtmkuvGGvRiebdl2CRSAYIAKs7KR8wHGRXNWpUvaXlJejNqVSfs9E/VHk2pxwWnhXULm8tpLVrCB3ieRYmhcqCQWwASMjop/LOa7LQ/2c7XWbSO3fXraQXQjMi20Voqy7QJNrJIZgU3BSApVjjAbHFV/ih4i+C3xU0e+i8P/AAhj0W4026e7TUY/E2r3kqKkbsgdZjKqyiYRELHMyttwwOVr0DUvj+LHT4yl9p7SShVkdICsabcjDvLGQVUM4C8Fj3ABrTD0cPyqokr+SZNWpVu4N/ef/9k=",
            (n = new Image).src = "data:image/jpeg;base64,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",
            SkyTexture = new Image,
            SkyTexture.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACAAIADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1bx9+z/pPhXWLxZryS6njkBjRASSc/wCz1/z710/g7W7O30m3tJmkhm8xlkiER+X+Fc56fh3PvXReLLSzsddm1BbWFoZgZTI0vzrj5gxHv6n1rmtN1bT9UuHks4ljmbBZQ2dpHfjp6/Wv3pVp1aa57vzP5llh6dCq/ZpK/TyN6++CVhrV75kjNHDkEKfkZx7/AJ1x3xn8BaXodusFrt37OmflJ5/Guzuzc2ulQt9qk3xgsAHJAFcpPpS+IpJrq4uTIqs38XJx2FGHqVFJSctEPF06Tg4RhqzwnU/A7X8x3Daobk461BZ+CzYXO3cvzN1Ydq9uvtAtdVh8uKHyWj+XPv6mvPfE+nR6HeSLIyMsOTyScmvfo4xz90+TxGWwh7zLWkeBE2RtkYAzyK6DTtDWOVI1jXHc4qn4N8TW99FBDH8zSHhe5HtXsHhnwXZPYCaeRWeQZVFOMHt7/lXnYzEuHxnsZfg41F+7OT03T4UXy41X0zjOfxroNJ0CMXKtJGCuc5I4H+f6V0Wm/Bu6e582FWa3GDn0Pp9K0G8J3emlrea1dmxw3Vf8mvHqYqL+Fn0NHATWs4m14YsLW9W3a2k3FR9wciqPinwlHe6l83mryAo/h/8Ar1s2Gkah4e0tZLe22rIBukyOR6AVc0Kxu7qdXuIxuXoRyD/jXl+15ZOSZ7ioKUVTa/A4zWvDX9jad/o+5nOSSV5f/CuX1PQ/tybRCI425Zf7x+te4al4f/tmFpJjHbxquM+v0rzHUNVt49dFuqrKu/G4Dhjz09TXRhcQ5XtujkxmDjC19mc1o/w0k1iaSBFjjbcPv988VPF+zwut37WkjSQsXKLKXCqxHbniuybfpfi+zjaN1a4fykVhu5OMdO/sOTWp42+Ii6Jdf2dcbIbm32q/nIFzlh0x3+6R35FaSxVdySp9TKGBwvK3V6M8N+JMOo+HobONY5J7eQH7WYQ8n7suMZY9uOpyOAe4x1WheEdL0XT1kiELTzLs2Z+ZiBjII64yfrxiptH8M3wha5VjdTXJ83M8RjhBOQQVz14B5B/rWo+gSRsrSXAWSPLDauPm55H/ANauqpiFZQv/AME4aOEfO6jXpfocL4ha50ZLyOa4FxvU4ADKyA/7OeP61xum3baeZFjkYhuT6nNeh+JfDEl9qm1S0kzjIaQ9h+nNc3d+FbiBSnkhSvGTj9a6qdaPKcNbDzc9CnpnjqPS3k3QQyu42jzF3bfoK4n4iCbXD/o8AdnOeB931NdfqGlw6fGN6+ZIvUqOtQ6TZnULvdLBt5wqhev1xXRTrRg+dHLWws6n7qRj/D3wbKJYW2/dHJXqPavbfCOpt4dAZfLZ9u0eYMqM+2axtC8OMUjWPbHGuDgYH511UHhBrrbI00JMY+5npXm4zGKpL3tj2cvy90Y3gdJo/irUZ4dvnK0ZHZcAfhXoWl+I7a80dHkg3XWAGJ5bgdq890Dw41wVjDEbQAMDFdZaWE2hW+5l8xe564rwcRyydkfUYP2kVd/5l5r+bUJsRwNBGvKjGT+JrSihaztfOdFbcMqvTn61X8PzS6ne+WIiq43cEcjGf8iustbvTQ0drMFeNhnezYUn375/lXDWk07WPTox5le5wXiO6eVfLMczKUIzEh+U49cehrgNM0KW11FZG00xxxTeYqzRhpGIz0H4j34r3TXJ9N1S6t7ezubeMeZsKovLt0OR3JH8qm1TR4ZNKu7qOVZp4BtS3wMMR0YEg8/ocdutbUsZyLltuc9fL/aS5ubY5vwRpDrcC6m8mFpJFUK8IeZScYZcc/KDnpx79D538d/gr5/if+0oYJLiO4YILkSb0EK5+UMcnaSn16dua77wpp+teLLaNSiWdrCNjFcr5gAGSGAUcguCF9u/Tl/2mLnVk8MqlnqE0Edq6tEkW7DEc7lXOOO3485rTCznHEpRkrvQ58dTpywbc4uy1Rpal4Zj0/SJPlCgg4+XBYjivO723kjumaWToeCf4vwFeweJ9IuZtPnSRdrnO04+6K83uvD5t2kd0Zg5PLc8/wCfSjD17q9ysZhrNJI50yKkjB1DZP3iOR6Y9qx9QszNckbd3mEtkV0mo6VJvz8uPaqskAztx+ldsayWqPPlhm9Gcjf+C453Lt1Pb0roPAPgK3tUM0gEnGNuOFH86sTW8l0FVYWYrwNoPSkhWa2Yx5ZT3XdyCPpRKtOSsmOGGpwlzcpbuNPhXUWWJVO044HT2ro/DHh6O5+8Nvqev4VgaZHg5b8a6nQbsxsNvPP5Vy1KjtY7qFOLd2jp9M8OtFcKYVxHxu//AF10FxDZ3+krFIWWaNTyRjJ9fpVfw/qP7nOPvDB56VtWEMN1dBpI1ZGGMEYzXmVKzvdnr06C5bR6nP8AhfSFtL2aeynkWaNS3lMB5bkZz9QeO9Z9zY/294hjWSSZXWTBYRbFQEfw/ie4479a9Ms9It2G2CFY1/HJrQtPh9apifO1+enYVl9eSbbNv7NlJKK2PP8AW/hxK2oR3VhJMWjZMtjBBHH69See9dlZeFby20GOSYQvGpLEOOoJzgkcj6V2fhjSIbRGUxrIyg9RkVrpbW+o6ft2bc8fLwv5H0riqY5uyfQ76OWwjeS6nnFsq3OmK1vGbXy3+dAAVJ9h04GPyrivGmlx3+ozbocwsNwBQY3ccj0r17UtEt4D5ccuEUZJ28g//Xrk9a0RZ1ZyylsEqcfj0rWhiEpXRliMK3HlZxfiXWfts7KG+QjPH8RrkdWtmEeNrEHjpVu48SQzQq7NtxnjqTXLeIfHf2cbYmXaxwCTXo0actkjya1WPxSZDcp5FxtZwgJ64qrEltDdSNJIpbJ+Vev4CuT8W+MXLbTJuZucIMVz+qfECKyuPJKs1xwGbPFenTws5K549THUoOx6pD4ut7K4MMaoTtxyOQKxtdmt7m486Fm8w9Qehrz6PxfCOjYY8nnP61reHrx9YnXkrH039hT+q8movrqqLlR1FhcbyBXTeHJFSRTgKSQKxdPfTdOtmbzFkmH3sHdg1peGLw6jfqkWNpbOWIHFctTVaHbR0auemaLGGgXfhF/hANb2k7So/ix056Vi6NpsEcSHzGkkPUKM4rsvD9izKoEIKtwPl5rxa0tT6GjFtItaQ23HPy9a2ItT8llMjfu+mPQZrN1S2h0xoyvBb06CqsusQx27eYyjjA9BXLbm1O3m5dGddHrFvEIwo3CQdM4z9a1LZB9l8xV/cjhsEHrXkev+OxaQkKQB1+Xuah0X4/ZtpI/LZY14GRlc+2f17VX1SbV0T9epxlaTO+8T3E9kFaGPzIy3zt1AHoPf3rm/EniNbPy12orLhTxj8aybP4lx3e1Ll26fL83Uc/561zvjjxJazXy7GZhjcWLda2o4d3s0ctbFJrmiz54vPiK8sZZPMZeQewrmtU8YXFzJ+6iZ2bkELnb+dWraS28P2sbX8kMmVGV3cAnnt1obxrpttay/Z13TSHKHbtz/AJ9K+1jThB+7E/O5VZzXvysczrx1GNR50kjM/JH+NYMtqQ26ZyW6kdK6XWPE63KKkkeO6jpn9P51i6vIk8CNuVWY8DHPvXZCpK1rWPPqUot3vcZZEudsYbjt6V0UeqyadbRwqs0LMOSx+Yn2qt4Y0yK5tkk8xfLY7TjhvqT2qC80zUG10L+8ukOANxztH9fSspSUnZm1OLiro6LSdX+yvG2/JYkZB/nXX+DfFapfId205456/wCfaua0+KGzsSr28e9T+Kj0J/wqTQxs1RWX5VY5UH/PSuGpFTTuepRm4Nan0Z4Q8TrJBEdqjpyg+9Xdv45YQrHERHuUAjGMCvBvC+oyoobfsC4xzya66DWMgN5nmP3JNfP1sKnI+qw+NaiehXniASwbml3MBisHWdRF9aNIpOyEcjPXBrFGsMEw25l+tLca1CltIu7BZcYrKNDldzaWIUlqeeeKfiBcWwmhRrjY0+Ayg5wMZ7fTn3ok1yW909bO3aRZpBvG7O5STj6U/wAUaCupXgmSXYyn5Y16H/GqVtcf2U++Rm3/AHVB6n8K9eEU4rlWp4c5SjJ8z0NS51mTRYfJnkMs3VmxjNYetePPKbzJZCzAY5OTisbx340iyqQ7mZRyzHmuCu/EEt/L8vRm25bgAmu3D4HmXNJHm4rMuR8sGcHqHiBXmdftnmurY5PAPcAVf8Nal/aWqQxTBl5K/e3Z9MD8K8a8W6i3hm7jka5VvMY5Uc4HvXVeEfHsjQrPArB4VyrEY5r6aphPd90+HoZkue0j2bxF4djsfMQzHzGG5UB9M/5/GvM9Q1O4i1X94szrtIUY+XB/r/Oo7j4uR2ECzXl4stywxtB37c98msFvjTHLKsbeW67sgKMk1nh8DWW6ubYrNMO7WlY9W+D2q+ZB5c2IYWfJklGdox7+v+cV0eqXcTay0kBaNZDgL9xSMEnp6/rXjmj/ABO+3NttVRJJjt+Y/cH8hXqHw9+F9x44RXXVnkyNzLjCoew+tYYjB+zk51HZHZg8wVWKp0lzM7jTtHuNRs5NroQQDuOPy+mK0vDfw/urrUyWlyrELuXG3+VbngL4aWegWvlXd8biUD5mBzt9vauvvdW0PQNM/d3CtcHovXaB/n9a8OtVafLT1+R9Nh8PFxU62nzKX/Cv5rCxjfzpJFXjceOaueF7fNwwkkVgvBYDpWDrnxk+zeXZtNHJH3Xhv89q09L8aWsNkyxph5EyT3P1/wAK46lOqo+8j0aVag5+49jrZba1NpI0ZXzFGfvf/XrgPE+ptbXLeZJjaelacmpy3Fo0iyso68cfpXn/AIvvGS5fdJv5znPWnhcO3KzYsbjFGPuos3HibrhmJOeh6Vha9rFzFCs2eP4e/X6VktrqqG/ecD25rS03xAmo2LW7K29SNvGNxr2I4dR1SPn5Ypz91sx447ieSOVo42aQbi0nH55/lWDr9teq8zbV8tTkt/CK6XxrqMPhbTfMuWZmnzgqO9eLeNviJdaqVt1mkjhdgiqe/PtXoYalKesdjycZiIUlaTdzhfGOlR2OrMslwtzuGArNlVGeAPwPeqGl+NLXSLCS1UGFnUgyDLn6UmoWElxC0jMyqMn5jyK5aUN58m3o3Vq+roYWLVnqfn1fHTUrx0INVuJriQzL93dyScD2piSR21vu8zc7dDn+VJrMUjomG6Dkdqy08yRyvzfQ16kaKseNUxDUjesfFVxaTrJHIw29FJ+U/hXuHwH/AGhr3wtabGYvGy4wSOfwr5/06wa0bc+07uQDzitywQ3BHfd2HpXPiMHSqw5ZI6sDmFahPng7M+jZP2lLi/u22v5SzN8uW+6B3zXU2XiCTxlpUb294fOU/P8AviCw6kgen+FfOGlWzQRDaqqM8nOSfpW3pviG60dttvdS2+4fMIzjI714tbLKaXuaM+kw+eVm/wB9qj2OfWYbG9Gy5kZlIVmPduvFej+FPGdrerFCXbyyo3yZ6e1fLVv4ukiuRm43P1AZs59a7fwz8QvKtl2upbq3PArz8VlvNE9jAZ1aV+h9HX/xF02yiaGGaSaOM4LdCfSuB8Z+NY5rrMbqqtyQBXA2HjoT3Zb5mPJOKW+1o3ELbv8AWNyc9q4aOWqnI9SvnDqx7GzJqtvGVZZNzYBOT19qp3XimXSnYQzsI5vldEPzAVxt9q7aVIpUFzyQo7imNq63cTSCJt2M568fjXo/VdNTyHjr6Im8V+JJ9XidTcb5FBVVJ4Xj9a5a0sVvb5fNnU7XBJH3vwx0qxqesREoVib5R+9Y/wAh7Vg3d5JbT7rP5lOQzdD+ArspUPd5UeZiMYua71DW/M1d2EfyKoxgDAqna+AWltvMPCKM9PvfhXTwwQrf/eZedgUcHOcHFemp8MrW88KRXFu2/wAwY5XH1J7101MYqVkcFHL5V7s8BXRJgsipG2CMHA/nWHqmk/2eGbb0/SvcfE3hb7K8MStuhjXkY24PviuC8S+GJnlZtp8nGOh5rsoYtSODFYCVPc85jtpZWZkU475PNaVtK2nQq0g9Bz0rYt9E+wThXVUVjj5jgYrT1bQLXWPD6+T5YdenzYyPX157ZrqlWV7HDGg9yppeoyXNrukuY7VeiBsfN7//AF67TRPhomtacyrqUPmTLjco/wBX+P8AhXlekfDzUp7zc0kjRIfkVuqD8q9U8NaVqOnwQrFJIsajacDnnvnpXFitPhZ6WB1fvxuTTfAPVnMdx9ptGSE7dxYqX+nWqF34PufDt3HD5kBbGW8tt232PvXotjBeajaLBMWjjAO75s5yKsJ4IhjjVQpUep5NeX9Zadps9z6jHemn95yulabM7IqN8vU7RkkV3mgQ6WmmM1xGu5gR+85PHcVqfD/4Wag+trJHbGO3VcsJF4bOO2K6bxB4Ot0u28y3Xa3yFwmdvB5Argr4uDlyI9jC4Gooc8l954n4o09ZtaQ2o227gk+w9jUdpp8dtu3n7w4xwK9GuPh2+q3ax20IWNQF3yD9eM1T1P4WoEmaa+t3ji4OwcqfTBPJ7VtHFQslc55YOpdySPKdY0hphJ97bJlgQOKzPssdkqNsLbeCDXqUnhu2hhMMcTSIhwN5/LH+TWH4h8Leeu4xqNi+ntXZSxCeh5dbBNe8tz//2Q==",
            w.onload = function() {
                e.drawImage(w, 0, 0),
                x.loadedTextures.pop()
            }
            ,
            n.onload = function() {
                e.drawImage(n, 128, 0),
                x.loadedTextures.pop()
            }
            ,
            SkyTexture.onload = function() {
                e.drawImage(SkyTexture, 256, 0),
                x.loadedTextures.pop()
            }
            ,
            document.addEventListener("keydown", function(t) {
                s(t, k)
            }, !0),
            document.addEventListener("keyup", function(t) {
                G(t, k)
            }, !0),
            v(d()),
            c()
        }()
    }(t)
}(window);
