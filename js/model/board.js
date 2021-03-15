export class Board {
    constructor() {
    }
    static get module() {
        return 30;
    }
    static get slotsVertical() {
        return 10;
    }
    static get slotsHorizontal() {
        return 10;
    }
    static get stageHeight() {
        return Board.slotsVertical * Board.module;
    }
    static get stageWidth() {
        return this.slotsHorizontal * Board.module;
    }
}
//# sourceMappingURL=board.js.map