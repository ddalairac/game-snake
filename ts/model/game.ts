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
        this.modalContainer = document.querySelector(".modal-cont") as HTMLElement
        this.modalMessage = document.querySelector(".message") as HTMLElement
        this.continueBTN = document.getElementById("continueBTN") as HTMLElement
        this.starGame()

    }
    private static _instance: Game
    public static get instance() {
        return this._instance;
    }

    public intervalTime: number = 0
    public interval: any
    public snake: Snake = new Snake()
    public apple: Apple = new Apple()
    private gameOver = false


    private modalContainer: HTMLElement
    private modalMessage: HTMLElement
    private continueBTN: HTMLElement

    public starGame() {
        // console.log("Start Game")
        this.gameOver = false
        clearInterval(this.interval)
        this.snake = new Snake()
        this.apple = new Apple()
        this.intervalTime = 400
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
        let newTime = Math.round(this.intervalTime - (this.intervalTime / 20))
        this.intervalTime = (newTime < 80) ? 80 : newTime
        // console.log("intervalTime",this.intervalTime)
        this.interval = setInterval(this.frameLoop, this.intervalTime);
    }
    public hideModal() {
        // console.log("hide Modal")
        this.modalContainer.style.display = "none"
        this.modalMessage.innerText = ""
        this.continueBTN.style.display = "block"
    }
    public showModal(message: string) {
        // console.log("show Modal")
        this.modalContainer.style.display = "flex"
        this.modalMessage.innerText = message
        if (this.gameOver) this.continueBTN.style.display = "none"

    }
}
