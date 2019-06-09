function Shape(color) {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate method...Shape constructor');
}

function Circle() {
}

Circle.prototype = Object.create(Shape.prototype); // Object.create sets up the prototype properlty
Circle.prototype.constructor = Circle;

Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);
    console.log('duplicate method...Circle constructor')
}

const c1 = new Circle();
c1.duplicate();
