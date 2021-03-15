import { Game } from '../model/game.js';
export class EventHandler {
    constructor() {
        document.addEventListener('keydown', this.keyboardEventHandler);
        this.setBTNs();
    }
    setBTNs() {
        let start = document.getElementById("start");
        let pause = document.getElementById("pause");
        let continuePlay = document.getElementById("continue");
        let up = document.getElementById("up");
        let down = document.getElementById("down");
        let left = document.getElementById("left");
        let right = document.getElementById("right");
        start.addEventListener("click", () => {
            Game.instance.starGame();
        });
        pause.addEventListener("click", () => {
            Game.instance.pauseGame();
        });
        continuePlay.addEventListener("click", () => {
            Game.instance.pauseGame();
        });
        up.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Up);
        });
        down.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Down);
        });
        left.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Left);
        });
        right.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Right);
        });
    }
    keyboardEventHandler(e) {
        console.log("Event", e);
        switch (e.code) {
            case eArrow.Left:
                EventHandler.arrowEvent(eArrow.Left);
                break;
            case eArrow.Up:
                EventHandler.arrowEvent(eArrow.Up);
                break;
            case eArrow.Right:
                EventHandler.arrowEvent(eArrow.Right);
                break;
            case eArrow.Down:
                EventHandler.arrowEvent(eArrow.Down);
                break;
            case eArrow.Space:
                Game.instance.pauseGame();
                break;
        }
    }
    static arrowEvent(key) {
        console.log("key", key);
        if (Game.instance.snake)
            Game.instance.snake.bufferMov = key;
    }
}
export var eArrow;
(function (eArrow) {
    eArrow["Down"] = "ArrowDown";
    eArrow["Up"] = "ArrowUp";
    eArrow["Right"] = "ArrowRight";
    eArrow["Left"] = "ArrowLeft";
    eArrow["Space"] = "Space";
})(eArrow || (eArrow = {}));
//# sourceMappingURL=event-handler.js.map