export class Board {
    constructor() {
    }
    private static _module: number = 30;
    public static get module() {
        return Board._module;
    }
    private static _stageSlots: Array<number[]> = [
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
    public static get stageSlots() {
        return Board._stageSlots;
    }
    public static set stageSlots(value) {
        Board._stageSlots = value;
    }
    public static get stageHeight() {
        return Board.stageSlots[0].length * Board.module;;
    }
    public static get stageWidth() {
        return Board.stageSlots[1].length * Board.module;;
    }
}