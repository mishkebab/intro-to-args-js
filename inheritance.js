// Function.prototype.inherits = function (Parent) {
//     function Surrogate () {};
//     Surrogate.prototype = Parent.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// };

Function.prototype.inherits = function(Parent) {
    this.prototype = Object.create(Parent.prototype);
    this.prototype.constructor = this;
}


function MovingObject () {
    this.fly = ("I'm flying!");
};

MovingObject.prototype.moving = function() {
    console.log("I'm moving!");
};

function Ship () {
    this.export = (`"I'm exporting quantum computers"`);
};

Ship.inherits(MovingObject);

function Asteroid () {
    this.collison = (`"Boom!"`);
};
Asteroid.inherits(MovingObject);

const satellite = new MovingObject();
const mayflow = new Ship();
const Asteroid1 = new Asteroid();

console.log(Asteroid1.collison)
// console.log(mayflow.__proto__)
// console.log(mayflow.export)


