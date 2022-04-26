import * as PIXI from "pixi.js"

const win_w = window.innerWidth;
const win_h = window.innerHeight;
const g_TICK = 62;
const FPS = Math.round(1000/g_TICK);
const rand = (num:number):number => Math.floor(Math.random()*num)

let g_Time = 0;

let PIXI_Text_array = new Array();

window.onload = () => {
    //PIXIApplicationを生成
    const app = new PIXI.Application({
        width: win_w, height: win_w, backgroundColor: 0x1099bb
    })
    
    document.body.appendChild(app.view);

    const basicText = new PIXI.Text("FPS:"+FPS);
    basicText.x = 0;
    basicText.y = 10;

    app.stage.addChild(basicText);

    app.ticker.add((delta) => {
        var timeNow = (new Date()).getTime();
        var timeDiff = timeNow - g_Time;
        if(timeDiff < g_TICK) {
            return
        } else {
            game_ticker();
        }
        // We are now meeting the frame rate, so reset the last time the animation is done
        g_Time = timeNow;
    })
}

const game_ticker = ():void => {

}