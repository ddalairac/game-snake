import { Game } from '../model/game.js';
export class EventHandler {
    constructor() {
        document.addEventListener('keydown', this.keyboardEventHandler);
        this.setBTNs();
    }
    setBTNs() {
        let startBTN = document.getElementById("startBTN");
        let pauseBTN = document.getElementById("pauseBTN");
        let continueBTN = document.getElementById("continueBTN");
        let upBTN = document.getElementById("upBTN");
        let downBTN = document.getElementById("downBTN");
        let leftBTN = document.getElementById("leftBTN");
        let rightBTN = document.getElementById("rightBTN");
        startBTN.addEventListener("click", () => {
            Game.instance.starGame();
        });
        pauseBTN.addEventListener("click", () => {
            Game.instance.pauseGame();
        });
        continueBTN.addEventListener("click", () => {
            Game.instance.pauseGame();
        });
        upBTN.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Up);
        });
        downBTN.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Down);
        });
        leftBTN.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Left);
        });
        rightBTN.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Right);
        });
    }
    keyboardEventHandler(e) {
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
        let bufferMov = Game.instance.snake.bufferMov;
        if (bufferMov == eArrow.Up && key != eArrow.Down ||
            bufferMov == eArrow.Down && key != eArrow.Up ||
            bufferMov == eArrow.Left && key != eArrow.Right ||
            bufferMov == eArrow.Right && key != eArrow.Left) {
            if (Game.instance.snake)
                Game.instance.snake.bufferMov = key;
        }
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