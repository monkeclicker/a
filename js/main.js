var _0xed7e = ["\x63\x61\x6E\x76\x61\x73", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x32\x64", "\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74", "\x77\x69\x64\x74\x68", "\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68", "\x68\x65\x69\x67\x68\x74", "\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74", "\x6C\x6F\x67", "\x78", "\x79", "\x72", "\x63\x6F\x6C\x6F\x72", "\x6C\x69\x67\x68\x74\x67\x72\x65\x79", "\x64\x78", "\x64\x79", "\x62\x65\x67\x69\x6E\x50\x61\x74\x68", "\x50\x49", "\x61\x72\x63", "\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65", "\x23\x39\x36\x34\x42\x30\x30", "\x66\x69\x6C\x6C", "\x6D\x6F\x76\x65\x54\x6F", "\x6C\x69\x6E\x65\x57\x69\x64\x74\x68", "\x73\x74\x72\x6F\x6B\x65", "\x63\x6C\x6F\x73\x65\x50\x61\x74\x68", "\x75\x70", "\x72\x69\x67\x68\x74", "\x64\x6F\x77\x6E", "\x6C\x65\x66\x74", "\x64\x72\x61\x77", "\x63\x6F\x64\x65", "\x4B\x65\x79\x57", "\x41\x72\x72\x6F\x77\x55\x70", "\x74\x79\x70\x65", "\x6B\x65\x79\x64\x6F\x77\x6E", "\x4B\x65\x79\x44", "\x41\x72\x72\x6F\x77\x52\x69\x67\x68\x74", "\x4B\x65\x79\x53", "\x41\x72\x72\x6F\x77\x44\x6F\x77\x6E", "\x4B\x65\x79\x41", "\x41\x72\x72\x6F\x77\x4C\x65\x66\x74", "\x6B\x65\x79\x75\x70", "\x63\x6C\x65\x61\x72\x52\x65\x63\x74", "\x75\x70\x64\x61\x74\x65"];
var canvas = document[_0xed7e[1]](_0xed7e[0]);
var ctx = canvas[_0xed7e[3]](_0xed7e[2]);
canvas[_0xed7e[4]] = window[_0xed7e[5]];
canvas[_0xed7e[6]] = window[_0xed7e[7]];
var x2 = canvas[_0xed7e[4]] - 60;
var y2 = canvas[_0xed7e[6]] - 60;
console[_0xed7e[8]](canvas[_0xed7e[4]], canvas[_0xed7e[6]]);
class Circle {
    constructor(_0x4156x6, _0x4156x7, _0x4156x8) {
        this[_0xed7e[9]] = _0x4156x6;
        this[_0xed7e[10]] = _0x4156x7;
        this[_0xed7e[11]] = _0x4156x8;
        this[_0xed7e[12]] = _0xed7e[13];
        this[_0xed7e[14]] = 0;
        this[_0xed7e[15]] = 0
    }
    draw() {
        if (this[_0xed7e[9]] <= 60) {
            this[_0xed7e[9]] = 60
        } else {
            if (this[_0xed7e[9]] >= x2) {
                this[_0xed7e[9]] = x2
            }
        };
        if (this[_0xed7e[10]] <= 60) {
            this[_0xed7e[10]] = 60
        } else {
            if (this[_0xed7e[10]] >= y2) {
                this[_0xed7e[10]] = y2
            }
        };
        ctx[_0xed7e[16]]();
        ctx[_0xed7e[18]](this[_0xed7e[9]], this[_0xed7e[10]], this[_0xed7e[11]], 0, 2 * Math[_0xed7e[17]]);
        ctx[_0xed7e[19]] = _0xed7e[20];
        ctx[_0xed7e[21]]();
        ctx[_0xed7e[22]](this[_0xed7e[9]], this[_0xed7e[10]]);
        ctx[_0xed7e[23]] = 5;
        ctx[_0xed7e[24]]();
        ctx[_0xed7e[25]]()
    }
    update() {
        if (controller1[_0xed7e[26]]) {
            this[_0xed7e[15]] -= 0.5
        };
        if (controller1[_0xed7e[27]]) {
            this[_0xed7e[14]] += 0.5
        };
        if (controller1[_0xed7e[28]]) {
            this[_0xed7e[15]] += 0.5
        };
        if (controller1[_0xed7e[29]]) {
            this[_0xed7e[14]] -= 0.5
        };
        this[_0xed7e[9]] += this[_0xed7e[14]];
        this[_0xed7e[10]] += this[_0xed7e[15]];
        this[_0xed7e[14]] *= 0.9;
        this[_0xed7e[15]] *= 0.9;
        this[_0xed7e[30]]()
    }
};
class Controller {
    constructor() {
        this[_0xed7e[26]] = false;
        this[_0xed7e[27]] = false;
        this[_0xed7e[28]] = false;
        this[_0xed7e[29]] = false;
        let _0x4156xb = (_0x4156xc) => {
            if (_0x4156xc[_0xed7e[31]] == _0xed7e[32] || _0x4156xc[_0xed7e[31]] == _0xed7e[33]) {
                this[_0xed7e[26]] = _0x4156xc[_0xed7e[34]] == _0xed7e[35]
            };
            if (_0x4156xc[_0xed7e[31]] == _0xed7e[36] || _0x4156xc[_0xed7e[31]] == _0xed7e[37]) {
                this[_0xed7e[27]] = _0x4156xc[_0xed7e[34]] == _0xed7e[35]
            };
            if (_0x4156xc[_0xed7e[31]] == _0xed7e[38] || _0x4156xc[_0xed7e[31]] == _0xed7e[39]) {
                this[_0xed7e[28]] = _0x4156xc[_0xed7e[34]] == _0xed7e[35]
            };
            if (_0x4156xc[_0xed7e[31]] == _0xed7e[40] || _0x4156xc[_0xed7e[31]] == _0xed7e[41]) {
                this[_0xed7e[29]] = _0x4156xc[_0xed7e[34]] == _0xed7e[35]
            }
        };
        addEventListener(_0xed7e[35], _0x4156xb);
        addEventListener(_0xed7e[42], _0x4156xb)
    }
};
let circle1 = new Circle(canvas[_0xed7e[4]] / 2, canvas[_0xed7e[6]] / 2, 50, 0, Math[_0xed7e[17]] * 2);
let controller1 = new Controller();

function animate() {
    ctx[_0xed7e[43]](0, 0, canvas[_0xed7e[4]], canvas[_0xed7e[6]]);
    circle1[_0xed7e[44]]();
    requestAnimationFrame(animate)
}
animate()
