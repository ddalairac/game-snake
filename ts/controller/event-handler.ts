import { Game } from '../model/game.js';

export class EventHandler {
    constructor() {
        document.addEventListener('keydown', this.keyboardEventHandler)
        this.setBTNs()
    }

    private setBTNs() {
        let startBTN: HTMLElement = document.getElementById("startBTN") as HTMLElement
        let pauseBTN: HTMLElement = document.getElementById("pauseBTN") as HTMLElement
        let continueBTN: HTMLElement = document.getElementById("continueBTN") as HTMLElement
        let upBTN: HTMLElement = document.getElementById("upBTN") as HTMLElement
        let downBTN: HTMLElement = document.getElementById("downBTN") as HTMLElement
        let leftBTN: HTMLElement = document.getElementById("leftBTN") as HTMLElement
        let rightBTN: HTMLElement = document.getElementById("rightBTN") as HTMLElement
        startBTN.addEventListener("click", () => {
            Game.instance.starGame()
        })
        pauseBTN.addEventListener("click", () => {
            Game.instance.pauseGame()
        })
        continueBTN.addEventListener("click", () => {
            Game.instance.pauseGame()
        })
        upBTN.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Up);
        })
        downBTN.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Down);
        })
        leftBTN.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Left);
        })
        rightBTN.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Right);
        })
    }

    private keyboardEventHandler(e: KeyboardEvent) {
        // console.log("Event", e)
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
                Game.instance.pauseGame()
                break;
        }
    }

    private static arrowEvent(key: eArrow) {
        let bufferMov = Game.instance.snake.bufferMov
        // console.log("buffer", bufferMov, "key", key)
        if (bufferMov == eArrow.Up && key != eArrow.Down ||
            bufferMov == eArrow.Down && key != eArrow.Up ||
            bufferMov == eArrow.Left && key != eArrow.Right ||
            bufferMov == eArrow.Right && key != eArrow.Left) {
            if (Game.instance.snake) Game.instance.snake.bufferMov = key
        }
    }
}

export enum eArrow {
    Down = "ArrowDown",
    Up = "ArrowUp",
    Right = "ArrowRight",
    Left = "ArrowLeft",
    Space = "Space"
}
