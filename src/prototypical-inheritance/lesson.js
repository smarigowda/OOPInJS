function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate method...Shape constructor');
}

function Circle() {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log('duplicate method...on Circle prototype');
}

function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('duplicate method...on Square prototype');
}

let shapes = [new Circle(), new Square(), new Shape()];

for(let shape of shapes) {
    shape.duplicate();
}
