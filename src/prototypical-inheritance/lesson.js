function Shape() {
    this.move = function() {
        console.log('move method...');
    }
}

Shape.prototype.duplicate = function() {
    console.log('duplicate method...');
}

function Circle() {
    this.draw = function() {
        console.log('draw method');
    }
}

Circle.prototype = Object.create(Shape.prototype); // Object.create sets up the prototype properlty
// Circle.prototype = Shape.prototype // does not work.

const s1 = new Shape();
const c1 = new Circle();
