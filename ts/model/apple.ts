import { Render } from '../view/render.js';

export class Apple {
    constructor(x: number, y: number, color?: string) {
        this.x = x;
        this.y = y;

        if (color) {
            this.color = color;
        } else {
            this.color = "red";
        }
        Render.instance.apple(x,y)
    }
    color: string;
    x: number;
    y: number;
}