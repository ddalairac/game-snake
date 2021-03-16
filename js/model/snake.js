import { eArrow } from '../controller/event-handler.js';
import { Board } from './board.js';
import { Game } from './game.js';
import { SnakeLink } from './snake-link.js';
export class Snake {
    constructor() {
        this.snakeLinks = [];
        this.bufferMov = eArrow.Right;
        this.snakeLinks.push(new SnakeLink(0, 0));
    }
    snakeUpdate() {
        this.snakeUpdatePosition();
        this.snakeCheckColition();
    }
    getHead() {
        return this.snakeLinks[0];
    }
    getTale() {
        return this.snakeLinks[this.snakeLinks.length - 1];
    }
    snakeUpdatePosition() {
        for (let i = 0; i < this.snakeLinks.length; i++) {
            if (this.snakeLinks[i] == this.getHead()) {
                this.moveSnakeHead(this.snakeLinks[i]);
            }
            else {
                this.snakeLinks[i].x = this.snakeLinks[i - 1].lastX;
                this.snakeLinks[i].y = this.snakeLinks[i - 1].lastY;
            }
        }
    }
    moveSnakeHead(link) {
        switch (this.bufferMov) {
            case eArrow.Down:
                link.x = link.x;
                link.y = (link.y + 1 >= Board.slotsVertical)
                    ? 0
                    : link.y + 1;
                break;
            case eArrow.Up:
                link.x = link.x;
                link.y = (link.y - 1 < 0)
                    ? Board.slotsVertical - 1
                    : link.y - 1;
                break;
            case eArrow.Right:
                link.y = link.y;
                link.x = (link.x + 1 >= Board.slotsHorizontal)
                    ? 0
                    : link.x + 1;
                break;
            case eArrow.Left:
                link.y = link.y;
                link.x = (link.x - 1 < 0)
                    ? Board.slotsHorizontal - 1
                    : link.x - 1;
                break;
        }
    }
    snakeCheckColition() {
        let headLink = this.getHead();
        this.snakeLinks.forEach((link) => {
            var _a, _b;
            if (((_a = Game.instance.apple) === null || _a === void 0 ? void 0 : _a.y) == headLink.y && ((_b = Game.instance.apple) === null || _b === void 0 ? void 0 : _b.x) == headLink.x) {
                Game.instance.apple.relocate();
                this.snakeAddTale();
                Game.instance.speedUpGame();
            }
            if (link != headLink && link.y == headLink.y && link.x == headLink.x) {
                Game.instance.endGame();
                Game.instance.showModal("Game Over");
            }
        });
    }
    snakeAddTale() {
        let taleLink = this.getTale();
        this.snakeLinks.push(new SnakeLink(taleLink.lastY, taleLink.lastX));
    }
}
//# sourceMappingURL=snake.js.map