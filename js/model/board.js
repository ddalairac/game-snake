export class Board {
    constructor() {
    }
    static get module() {
        return Board._module;
    }
    static get stageSlots() {
        return Board._stageSlots;
    }
    static set stageSlots(value) {
        Board._stageSlots = value;
    }
    static get stageHeight() {
        return Board.stageSlots[0].length * Board.module;
        ;
    }
    static get stageWidth() {
        return Board.stageSlots[1].length * Board.module;
        ;
    }
}
Board._module = 30;
Board._stageSlots = [
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
//# sourceMappingURL=board.js.map