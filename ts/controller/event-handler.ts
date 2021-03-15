import { Game } from '../model/game.js';

export class EventHandler {
    constructor() {
        document.addEventListener('keydown', this.keyboardEventHandler)
        this.setBTNs()
    }
    private setBTNs() {
        let start: HTMLElement = document.getElementById("start") as HTMLElement
        let pause: HTMLElement = document.getElementById("pause") as HTMLElement
        let continuePlay: HTMLElement = document.getElementById("continue") as HTMLElement
        let up: HTMLElement = document.getElementById("up") as HTMLElement
        let down: HTMLElement = document.getElementById("down") as HTMLElement
        let left: HTMLElement = document.getElementById("left") as HTMLElement
        let right: HTMLElement = document.getElementById("right") as HTMLElement
        start.addEventListener("click", () => {
            Game.instance.starGame()
        })
        pause.addEventListener("click", () => {
            Game.instance.pauseGame()
        })
        continuePlay.addEventListener("click", () => {
            Game.instance.pauseGame()
        })
        up.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Up);
        })
        down.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Down);
        })
        left.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Left);
        })
        right.addEventListener("click", () => {
            EventHandler.arrowEvent(eArrow.Right);
        })
    }
    private keyboardEventHandler(e: KeyboardEvent) {
        console.log("Event", e)
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
        console.log("key", key)
        if (Game.instance.snake) Game.instance.snake.bufferMov = key
    }

}

export enum eArrow {
    Down = "ArrowDown",
    Up = "ArrowUp",
    Right = "ArrowRight",
    Left = "ArrowLeft",
    Space = "Space"
}
