export class Board {
    constructor() {

    }
    public static get module() {
        return 30;
    } 
    public static get slotsVertical(): number {
        return 10
    }
    public static get slotsHorizontal(): number {
        return 10
    }
    public static get stageHeight(): number {
        return Board.slotsVertical * Board.module;
    }
    public static get stageWidth(): number {
        return this.slotsHorizontal * Board.module;
    }
}