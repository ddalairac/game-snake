import { eArrow } from '../controller/event-handler.js';
import { Render } from '../view/render.js';
import { Board } from './board.js';
import { Apple } from './apple.js';
import { SnakeLink } from './snake-link.js';

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

    public interval: number = 0
    public bufferMov: string | eArrow = eArrow.Right;
    public snakeLinks: Array<SnakeLink> = [];
    private addTale: boolean = false

    public starGame() {
        console.log("Start Game")
        console.log("Board", Board.stageSlots)
        this.interval = setInterval(this.frameLoop, 300);
        this.snakeLinks.push(new SnakeLink(0, 0));
        this.locateApple();
    }
    private frameLoop() {
        Game.instance.updateFrame();
        Render.instance.board()
    }

    private updateFrame() {
        this.snakeAddTale()
        this.snakeUpdatePosition()
        this.snakeCheckColition()
        this.boardUpdate()
    }
    private snakeAddTale(){
        if( this.addTale == true ){
            this.addTale = false
            let taleLink = this.snakeLinks[0]
            this.snakeLinks.push(new SnakeLink(taleLink.lastY, taleLink.lastX));
        }
    }
    private snakeUpdatePosition() {
        for (let i = 0; i < this.snakeLinks.length; i++) {
            // head
            if (i == this.snakeLinks.length - 1) {
                this.moveSnakeHead(this.snakeLinks[i])

                // Body
            } else {
                this.snakeLinks[i].x = this.snakeLinks[i + 1].lastX
                this.snakeLinks[i].y = this.snakeLinks[i + 1].lastY
            }
        }
    }
    private snakeCheckColition() {
        let headLink = this.snakeLinks[this.snakeLinks.length - 1]
        // apple
        if (Board.stageSlots[headLink.y][headLink.x] == 2) {
            this.addTale = true
            console.log("new link")
        }
        // snake
        if (Board.stageSlots[headLink.y][headLink.x] == 1) {
            console.log("Game Over")
        }
    }
    private boardUpdate() {
        this.snakeLinks.forEach(link => {
            Board.stageSlots[link.y][link.x] = 1
        });
        Board.stageSlots[this.snakeLinks[0].lastY][this.snakeLinks[0].lastX] = 0
    }
    private moveSnakeHead(link: SnakeLink) {
        switch (this.bufferMov) {
            case eArrow.Down:
                link.y = (link.y + 1 >= Board.stageSlots.length)
                    ? 0
                    : link.y + 1
                break;
            case eArrow.Up:
                link.y = (link.y - 1 < 0)
                    ? Board.stageSlots.length + 1
                    : link.y - 1
                break;
            case eArrow.Right:
                link.x = (link.x + 1 >= Board.stageSlots[0].length)
                    ? 0
                    : link.x + 1
                break;
            case eArrow.Left:
                link.x = (link.x - 1 < 0)
                    ? Board.stageSlots[0].length + 1
                    : link.x - 1
                break;
        }
    }
    private locateApple() {

    }

}