import { Game } from '../model/game.js';
export class EventHandler {
    constructor() {
        document.addEventListener('keydown', this.keyboardEventHandler);
    }
    keyboardEventHandler(e) {
        switch (e.key) {
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
        }
    }
    static arrowEvent(key) {
        console.log("key", key);
        Game.instance.bufferMov = key;
    }
}
export var eArrow;
(function (eArrow) {
    eArrow["Down"] = "ArrowDown";
    eArrow["Up"] = "ArrowUp";
    eArrow["Right"] = "ArrowRight";
    eArrow["Left"] = "ArrowLeft";
})(eArrow || (eArrow = {}));
//# sourceMappingURL=event-handler.js.map