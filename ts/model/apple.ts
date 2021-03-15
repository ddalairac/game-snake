import { Render } from '../view/render.js';
import { Board } from './board.js';
import { Game } from './game.js';

export class Apple {
    constructor(x: number = 4, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    x: number;
    y: number;
    public relocate() {
        let slot = this.findEmptySlot()
        console.log("slot", slot)

        if (slot) {
            this.y = slot.y
            this.x = slot.x
        } else {
            console.log("You win! si")
        }
    }
    private findEmptySlot(): { y: number, x: number } | null {

        let snakeLinks = Game.instance.snake.snakeLinks
        let matrix = []

        if (snakeLinks.length >= Board.slotsHorizontal * Board.slotsVertical) {
            console.log("You win!")
            return null
        }

        for (let y = 0; y < Board.slotsVertical; y++) {
            for (let x = 0; x < Board.slotsHorizontal; x++) {
                matrix.push({ y: y, x: x });
            }
        }

        let emptySlots = matrix.filter((slot) => {
            snakeLinks.forEach(link => {
                if (link.y == slot.y && link.x == slot.x) { return false }
            });
            return true
        })

        let indexRandomEmptySlots = Math.floor(Math.random() * emptySlots.length)
        return emptySlots[indexRandomEmptySlots]
    }
}