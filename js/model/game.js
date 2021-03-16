import { Render } from '../view/render.js';
import { Apple } from './apple.js';
import { Snake } from './snake.js';
export class Game {
    constructor() {
        this.intervalTime = 0;
        this.snake = new Snake();
        this.apple = new Apple();
        this.gameOver = false;
        if (Game._instance) {
            throw "Ya existe una instancia de Game";
        }
        Game._instance = this;
        this.modalContainer = document.querySelector(".modal-cont");
        this.modalMessage = document.querySelector(".message");
        this.continueBTN = document.getElementById("continueBTN");
        this.starGame();
    }
    static get instance() {
        return this._instance;
    }
    starGame() {
        this.gameOver = false;
        clearInterval(this.interval);
        this.snake = new Snake();
        this.apple = new Apple();
        this.intervalTime = 400;
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
        let newTime = Math.round(this.intervalTime - (this.intervalTime / 20));
        this.intervalTime = (newTime < 80) ? 80 : newTime;
        this.interval = setInterval(this.frameLoop, this.intervalTime);
    }
    hideModal() {
        this.modalContainer.style.display = "none";
        this.modalMessage.innerText = "";
        this.continueBTN.style.display = "block";
    }
    showModal(message) {
        this.modalContainer.style.display = "flex";
        this.modalMessage.innerText = message;
        if (this.gameOver)
            this.continueBTN.style.display = "none";
    }
}
//# sourceMappingURL=game.js.map