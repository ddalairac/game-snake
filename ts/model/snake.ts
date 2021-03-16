import { eArrow } from '../controller/event-handler.js';
import { Board } from './board.js';
import { Game } from './game.js';
import { SnakeLink } from './snake-link.js';

export class Snake {
    constructor() {
        this.snakeLinks.push(new SnakeLink(0, 0));
        // console.log("New Snake")
    }

    public snakeLinks: Array<SnakeLink> = [];
    public bufferMov: string | eArrow = eArrow.Right; // el event handler modifica el valor

    public snakeUpdate() {
        this.snakeUpdatePosition()
        this.snakeCheckColition()
    }

    public getHead(): SnakeLink {
        return this.snakeLinks[0]
    }
    public getTale(): SnakeLink {
        return this.snakeLinks[this.snakeLinks.length - 1]
    }

    private snakeUpdatePosition() {
        for (let i = 0; i < this.snakeLinks.length; i++) {
            // head
            if (this.snakeLinks[i] == this.getHead()) {
                this.moveSnakeHead(this.snakeLinks[i])

            // Body
            } else {
                this.snakeLinks[i].x = this.snakeLinks[i - 1].lastX
                this.snakeLinks[i].y = this.snakeLinks[i - 1].lastY
            }
        }
        // this.renderLinks()
    }
    
    // private renderLinks() {
    //     let element = document.getElementById("render-links")
    //     let render = JSON.stringify(this.snakeLinks).split('},{').join('},\n{')
    //     if (element) element.innerText = render
    // }

    private moveSnakeHead(link: SnakeLink) {
        switch (this.bufferMov) {
            case eArrow.Down:
                link.x = link.x
                link.y = (link.y + 1 >= Board.slotsVertical)
                    ? 0
                    : link.y + 1
                break;
            case eArrow.Up:
                link.x = link.x
                link.y = (link.y - 1 < 0)
                    ? Board.slotsVertical - 1
                    : link.y - 1
                break;
            case eArrow.Right:
                link.y = link.y
                link.x = (link.x + 1 >= Board.slotsHorizontal)
                    ? 0
                    : link.x + 1

                break;
            case eArrow.Left:
                link.y = link.y
                link.x = (link.x - 1 < 0)
                    ? Board.slotsHorizontal - 1
                    : link.x - 1
                break;
        }
    }

    private snakeCheckColition() {
        let headLink = this.getHead()

        this.snakeLinks.forEach((link) => {
            // apple
            if (Game.instance.apple?.y == headLink.y && Game.instance.apple?.x == headLink.x) {
                // console.log("new link")
                Game.instance.apple.relocate()
                this.snakeAddTale()
                Game.instance.speedUpGame()
            }
            // snake
            if (link != headLink && link.y == headLink.y && link.x == headLink.x) {
                // console.error("Game Over")
                Game.instance.endGame()
                Game.instance.showModal("Game Over")
            }
        })

    }

    private snakeAddTale() {
        let taleLink = this.getTale()
        this.snakeLinks.push(new SnakeLink(taleLink.lastY, taleLink.lastX));
    }

}