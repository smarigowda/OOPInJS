function Shape(color) {
    this.color = color;
    this.move = function() {
        console.log('move method...');
    }
}

Shape.prototype.duplicate = function() {
    console.log('duplicate method...');
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
    this.draw = function() {
        console.log('draw method');
    }
}

Circle.prototype = Object.create(Shape.prototype); // Object.create sets up the prototype properlty
Circle.prototype.constructor = Circle;

const s1 = new Shape('green');
const c1 = new Circle(1, 'red');
