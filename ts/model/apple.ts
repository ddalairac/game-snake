import { eArrow } from '../controller/event-handler.js';
import { Board } from './board.js';
import { Game } from './game.js';

export class Apple {
    constructor() {
        this.x = Math.round(Board.slotsHorizontal / 2);
        this.y = Math.round(Board.slotsVertical / 2);
    }
    public x: number;
    public y: number;
    public relocate() {
        let slot = this.findEmptySlot()

        if (slot) {
            this.y = slot.y
            this.x = slot.x
        } else {
            console.log("You win! ")
        }
    }
    private findEmptySlot(): { y: number, x: number } | null {
        let snakeLinks = Game.instance.snake.snakeLinks
        let matrix = []

        //not more empty spaces
        if (snakeLinks && snakeLinks.length >= Board.slotsHorizontal * Board.slotsVertical) {
            return null
        }

        // total spaces list
        for (let y = 0; y < Board.slotsVertical; y++) {
            for (let x = 0; x < Board.slotsHorizontal; x++) {
                matrix.push({ y: y, x: x });
            }
        }

        let emptySlots = matrix.filter((slot) => {

            // not inside snake
            let insideSnake = false
            snakeLinks.forEach(link => {
                if (link.y == slot.y && link.x == slot.x) { insideSnake = true }
            });
            if (insideSnake) {
                // console.log("is inside snake")
                return false
            }

            // check next slot
            let head = Game.instance.snake.getHead()
            let bufferMov = Game.instance.snake.bufferMov
            let hx = head.x
            let hy = head.y
            switch (bufferMov) {
                case eArrow.Left:
                    hx = (hx-- < 0) ? Board.slotsHorizontal : hx--
                    break;
                case eArrow.Right:
                    hx = (hx++ > Board.slotsHorizontal) ? 0 : hx++
                    break;
                case eArrow.Up:
                    hy = (hy-- < 0) ? Board.slotsVertical : hy--
                    break;
                case eArrow.Down:
                    hy = (hy++ > Board.slotsHorizontal) ? 0 : hy++
                    break;
            }
            if (hy == slot.y && hx == slot.x) {
                // console.log("is in next slot")
                return false
            }

            // is empty
            return true
        })

        let indexRandomEmptySlots = Math.floor(Math.random() * emptySlots.length)
        return emptySlots[indexRandomEmptySlots]
    }
}