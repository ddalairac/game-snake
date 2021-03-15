import { Board } from './board.js';
import { Game } from './game.js';
export class Apple {
    constructor(x = 4, y = 0) {
        this.x = x;
        this.y = y;
    }
    relocate() {
        let slot = this.findEmptySlot();
        console.log("slot", slot);
        if (slot) {
            this.y = slot.y;
            this.x = slot.x;
        }
        else {
            console.log("You win! si");
        }
    }
    findEmptySlot() {
        let snakeLinks = Game.instance.snake.snakeLinks;
        let matrix = [];
        if (snakeLinks.length >= Board.slotsHorizontal * Board.slotsVertical) {
            console.log("You win!");
            return null;
        }
        for (let y = 0; y < Board.slotsVertical; y++) {
            for (let x = 0; x < Board.slotsHorizontal; x++) {
                matrix.push({ y: y, x: x });
            }
        }
        let emptySlots = matrix.filter((slot) => {
            snakeLinks.forEach(link => {
                if (link.y == slot.y && link.x == slot.x) {
                    return false;
                }
            });
            return true;
        });
        let indexRandomEmptySlots = Math.floor(Math.random() * emptySlots.length);
        return emptySlots[indexRandomEmptySlots];
    }
}
//# sourceMappingURL=apple.js.map