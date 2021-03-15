import { Render } from '../view/render.js';
import { Apple } from './apple.js';
import { Snake } from './snake.js';
export class Game {
    constructor() {
        this.intervalTime = 500;
        this.snake = new Snake();
        this.apple = new Apple();
        this.gameOver = false;
        if (Game._instance) {
            throw "Ya existe una instancia de Game";
        }
        Game._instance = this;
        this.starGame();
    }
    static get instance() {
        return this._instance;
    }
    starGame() {
        console.log("Start Game");
        this.gameOver = false;
        clearInterval(this.interval);
        this.snake = new Snake();
        this.apple = new Apple();
        this.intervalTime = 500;
        this.interval = null;
        this.interval = setInterval(this.frameLoop, this.intervalTime);
        this.hideModal();
    }
    endGame() {
        clearInterval(this.interval);
        this.gameOver = true;
    }
    frameLoop() {
        Game.instance.snake.snakeUpdate();
        Render.instance.drawBoard();
    }
    pauseGame() {
        if (!this.gameOver) {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
                this.showModal("Pause");
            }
            else {
                this.interval = setInterval(this.frameLoop, this.intervalTime);
                this.hideModal();
            }
        }
        else {
            this.starGame();
        }
    }
    speedUpGame() {
        clearInterval(this.interval);
        this.intervalTime = this.intervalTime - (this.intervalTime / 20);
        this.interval = setInterval(this.frameLoop, this.intervalTime);
    }
    hideModal() {
        console.log("hide Modal");
        let modalContainer = document.querySelector(".modal-cont");
        let modalMessage = document.querySelector(".message");
        modalContainer.style.display = "none";
        modalMessage.innerText = "";
    }
    showModal(message) {
        console.log("show Modal");
        let modalContainer = document.querySelector(".modal-cont");
        let modalMessage = document.querySelector(".message");
        modalContainer.style.display = "flex";
        modalMessage.innerText = message;
    }
}
//# sourceMappingURL=game.js.map