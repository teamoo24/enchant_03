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
const win_h = window.innerHeight;
const g_TICK = 62;
const FPS = Math.round(1000 / g_TICK);
const rand = (num) => Math.floor(Math.random() * num);
let g_Time = 0;
let PIXI_Text_array = new Array();
window.onload = () => {
    //PIXIApplicationを生成
    const app = new PIXI.Application({
        width: win_w, height: win_w, backgroundColor: 0x1099bb
    });
    document.body.appendChild(app.view);
    const basicText = new PIXI.Text("FPS:" + FPS);
    basicText.x = 0;
    basicText.y = 10;
    app.stage.addChild(basicText);
    app.ticker.add((delta) => {
        var timeNow = (new Date()).getTime();
        var timeDiff = timeNow - g_Time;
        if (timeDiff < g_TICK) {
            return;
        }
        else {
            game_ticker();
        }
        // We are now meeting the frame rate, so reset the last time the animation is done
        g_Time = timeNow;
    });
};
const game_ticker = () => {
};
