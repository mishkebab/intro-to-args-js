


export default class Bird {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.velocity = 0;
        this.height = this.dimensions.height / 2;
        this.width = this.dimensions.width / 3;
    };

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.width, this.height, 40, 30);
    };

    animate(ctx) {
        this.move();
        this.drawBird(ctx);
    };

    move(){
        this.height += this.velocity; 
        this.velocity += 0.5;
    }

    flap() {
        this.velocity = -8;
        
    }
};