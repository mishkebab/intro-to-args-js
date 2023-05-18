Function.prototype.inherits = function (Parent) {
    function Surrogate () {}
        Surrogate.protoype = Parent.prototype;
        this.prototype = new Surrogate();
        this.prototype.constructor = this;
};

function MovingObject () {
    this.fly = return ("I'm flying!")
}

function Ship () {
    this.export = return ("I'm exporting quantum computers")
}
Ship.inherits(MovingObject);

function Asteroid () {
    this.collison = return "Boom!")
}
Asteroid.inherits(MovingObject);

const satellite = new MovingObject();

const mayflow = new Ship();

const Asteroid1 = new Asteroid();

// mayflow.fly 
// mayflow.export

