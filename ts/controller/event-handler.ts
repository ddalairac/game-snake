import { Game } from '../model/game.js';

export class EventHandler {
    constructor() {
        document.addEventListener('keydown', this.keyboardEventHandler)
    }
    private keyboardEventHandler(e: KeyboardEvent) {
        // console.log("Event", e)
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
    private static arrowEvent(key: eArrow) {
        console.log("key", key)
        Game.instance.bufferMov = key
    }
}

export enum eArrow {
    Down = "ArrowDown",
    Up = "ArrowUp",
    Right = "ArrowRight",
    Left = "ArrowLeft"
}
