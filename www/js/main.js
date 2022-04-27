"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = __importStar(require("pixi.js"));
const win_w = window.innerWidth;
const g_TICK = 62;
const FPS = Math.round(1000 / g_TICK);
const rand = (num) => Math.floor(Math.random() * num);
let g_Time = 0;
let tick = 0;
let PIXI_Text_array;
let label_tick;
const addLabel = () => {
    let score = rand(100);
    let r = rand(256);
    let g = rand(256);
    let b = rand(256);
    let x = rand(win_w);
    let y = rand(win_w);
    const style = new PIXI.TextStyle({
        fontFamily: 'monospace',
        fontSize: 16,
        fill: ["#" + r.toString(16) + g.toString(16) + b.toString(16)]
    });
    let text = new PIXI.Text(score + "点", style);
    text.x = x;
    text.y = y;
    return text;
};
window.onload = () => {
    //PIXIApplicationを生成
    const app = new PIXI.Application({
        width: win_w, height: win_w, backgroundColor: 0x1099bb
    });
    document.body.appendChild(app.view);
    PIXI_Text_array = new Array();
    label_tick = new Array();
    app.ticker.add((delta) => {
        var timeNow = (new Date()).getTime();
        var timeDiff = timeNow - g_Time;
        if (timeDiff < g_TICK) {
            return;
        }
        else {
            tick++;
            for (var i = app.stage.children.length - 1; i >= 0; i--) {
                app.stage.removeChild(app.stage.children[i]);
            }
            ;
            if (tick % 3 == 0) {
                PIXI_Text_array.push(addLabel());
                label_tick.push(0);
            }
            PIXI_Text_array.forEach((element, index) => {
                element.y--;
                app.stage.addChild(element);
            });
            label_tick.forEach((element, index) => {
                label_tick[index]++;
                if (element > 10) {
                    delete PIXI_Text_array[index];
                    delete label_tick[index];
                }
            });
        }
        // We are now meeting the frame rate, so reset the last time the animation is done
        g_Time = timeNow;
    });
};
