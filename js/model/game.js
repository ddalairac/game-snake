import { eArrow } from '../controller/event-handler.js';
import { Render } from '../view/render.js';
import { Board } from './board.js';
import { SnakeLink } from './snake-link.js';
export class Game {
    constructor() {
        this.interval = 0;
        this.bufferMov = eArrow.Right;
        this.snakeLinks = [];
        this.addTale = false;
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
        console.log("Board", Board.stageSlots);
        this.interval = setInterval(this.frameLoop, 300);
        this.snakeLinks.push(new SnakeLink(0, 0));
        this.locateApple();
    }
    frameLoop() {
        Game.instance.updateFrame();
        Render.instance.board();
    }
    updateFrame() {
        this.snakeAddTale();
        this.snakeUpdatePosition();
        this.snakeCheckColition();
        this.boardUpdate();
    }
    snakeAddTale() {
        if (this.addTale == true) {
            this.addTale = false;
            let taleLink = this.snakeLinks[0];
            this.snakeLinks.push(new SnakeLink(taleLink.lastY, taleLink.lastX));
        }
    }
    snakeUpdatePosition() {
        for (let i = 0; i < this.snakeLinks.length; i++) {
            if (i == this.snakeLinks.length - 1) {
                this.moveSnakeHead(this.snakeLinks[i]);
            }
            else {
                this.snakeLinks[i].x = this.snakeLinks[i + 1].lastX;
                this.snakeLinks[i].y = this.snakeLinks[i + 1].lastY;
            }
        }
    }
    snakeCheckColition() {
        let headLink = this.snakeLinks[this.snakeLinks.length - 1];
        if (Board.stageSlots[headLink.y][headLink.x] == 2) {
            this.addTale = true;
            console.log("new link");
        }
        if (Board.stageSlots[headLink.y][headLink.x] == 1) {
            console.log("Game Over");
        }
    }
    boardUpdate() {
        this.snakeLinks.forEach(link => {
            Board.stageSlots[link.y][link.x] = 1;
        });
        Board.stageSlots[this.snakeLinks[0].lastY][this.snakeLinks[0].lastX] = 0;
    }
    moveSnakeHead(link) {
        switch (this.bufferMov) {
            case eArrow.Down:
                link.y = (link.y + 1 >= Board.stageSlots.length)
                    ? 0
                    : link.y + 1;
                break;
            case eArrow.Up:
                link.y = (link.y - 1 < 0)
                    ? Board.stageSlots.length + 1
                    : link.y - 1;
                break;
            case eArrow.Right:
                link.x = (link.x + 1 >= Board.stageSlots[0].length)
                    ? 0
                    : link.x + 1;
                break;
            case eArrow.Left:
                link.x = (link.x - 1 < 0)
                    ? Board.stageSlots[0].length + 1
                    : link.x - 1;
                break;
        }
    }
    locateApple() {
    }
}
//# sourceMappingURL=game.js.map