import { Render } from '../view/render.js';
export class Apple {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        if (color) {
            this.color = color;
        }
        else {
            this.color = "red";
        }
        Render.instance.apple(x, y);
    }
}
//# sourceMappingURL=apple.js.map