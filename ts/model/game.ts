import { eArrow } from '../controller/event-handler.js';
import { Render } from '../view/render.js';
import { Board } from './board.js';
import { Apple } from './apple.js';
import { SnakeLink } from './snake-link.js';
import { Snake } from './snake.js';

export class Game {
    constructor() {
        if (Game._instance) {
            throw "Ya existe una instancia de Game";
        }
        Game._instance = this
        this.starGame()
    }
    private static _instance: Game
    public static get instance() {
        return this._instance;
    }

    public intervalTime: number = 500
    public interval: any
    public snake: Snake = new Snake()
    public apple: Apple = new Apple()
    private gameOver = false

    public starGame() {
        console.log("Start Game")
        this.gameOver = false
        clearInterval(this.interval)
        this.snake = new Snake()
        this.apple = new Apple()
        this.intervalTime = 500
        this.interval = null
        this.interval = setInterval(this.frameLoop, this.intervalTime);
        this.hideModal()
    }
    public endGame() {
        clearInterval(this.interval)
        this.gameOver = true
    }
    private frameLoop() {
        Game.instance.snake.snakeUpdate();
        Render.instance.drawBoard()
    }

    public pauseGame() {
        if (!this.gameOver) {
            if (this.interval) {
                clearInterval(this.interval)
                this.interval = null
                this.showModal("Pause")
            } else {
                this.interval = setInterval(this.frameLoop, this.intervalTime);
                this.hideModal()
            }
        } else {
            this.starGame()
        }
    }
    public speedUpGame() {
        clearInterval(this.interval)
        this.intervalTime = this.intervalTime - (this.intervalTime / 20)
        this.interval = setInterval(this.frameLoop, this.intervalTime);
    }
    public hideModal() {
        console.log("hide Modal")
        let modalContainer: HTMLElement = document.querySelector(".modal-cont") as HTMLElement
        let modalMessage: HTMLElement = document.querySelector(".message") as HTMLElement
        modalContainer.style.display = "none"
        modalMessage.innerText = ""
    }
    public showModal(message: string) {
        console.log("show Modal")
        let modalContainer: HTMLElement = document.querySelector(".modal-cont") as HTMLElement
        let modalMessage: HTMLElement = document.querySelector(".message") as HTMLElement
        modalContainer.style.display = "flex"
        modalMessage.innerText = message

    }
}
