import * as PIXI from "pixi.js"

const win_w:number = window.innerWidth;
const g_TICK:number = 62;
const FPS:number = Math.round(1000/g_TICK);
const rand = (num:number):number => Math.floor(Math.random()*num)

let g_Time:number = 0;
let tick:number = 0;

let PIXI_Text_array:Array<PIXI.Text>;
let label_tick:Array<number>;

const addLabel = ():PIXI.Text => {

    let score:number = rand(100);

    let r:number = rand(256);
    let g:number = rand(256);
    let b:number = rand(256);

    let x:number = rand(win_w);
    let y:number = rand(win_w);

    const style = new PIXI.TextStyle({
        fontFamily:'monospace',
        fontSize: 16,
        fill: ["#"+r.toString(16)+g.toString(16)+b.toString(16)]
    })
    let text:PIXI.Text = new PIXI.Text(score+"点",style);
    text.x = x;
    text.y = y;

    return text
}

window.onload = () => {

    //PIXIApplicationを生成
    const app:PIXI.Application = new PIXI.Application({
        width: win_w, height: win_w, backgroundColor: 0x1099bb
    })
    
    document.body.appendChild(app.view);
    
    PIXI_Text_array = new Array()
    label_tick = new Array();

    app.ticker.add((delta) => {
        var timeNow:number = (new Date()).getTime();
        var timeDiff:number = timeNow - g_Time;
        if(timeDiff < g_TICK) {
            return
        } else {
            tick++; 
            for (var i = app.stage.children.length - 1; i >= 0; i--) {	
                app.stage.removeChild(app.stage.children[i]);
            };
            if(tick%3 == 0) {
                PIXI_Text_array.push(addLabel());
                label_tick.push(0)
            }
            PIXI_Text_array.forEach((element,index) => {
                element.y--;
                app.stage.addChild(element)
            })
            label_tick.forEach((element,index) => {

                label_tick[index]++;
                if(element > 10) {
                    delete PIXI_Text_array[index];
                    delete label_tick[index];
                }
            })
        }
        // We are now meeting the frame rate, so reset the last time the animation is done
        g_Time = timeNow;
    })
}
