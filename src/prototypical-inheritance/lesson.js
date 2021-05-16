function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function Square() {}
function Shape(color) {
  this.color = color;
}
function Circle(radius) {
  Shape.call(this, "red");
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("drawing a circle...");
};

Circle.prototype.duplicate = function () {
  //   Shape.prototype.duplicate.call(this);
  console.log("duplicate circle");
};

const c = new Circle(1);

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

extend(Square, Shape);
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

Square.prototype.duplicate = function () {
  console.log("duplicate square...");
};

const s = new Square(10, "blue");

// console.log(s.duplicate());
// console.log(c.duplicate());

const shapes = [new Circle(10, "green"), new Square(20, "blue")];

// shapes.forEach( shape => shape.duplicate());

// ------------- Mixin -------------

const canWalk = {
    walk: function() {
        console.log('walking...');
    }
}

const canEat = {
    eat: function() {
        console.log('eating...');
    }
}

const canSwim = {
    siwm: function() {
        console.log('swimming...');
    }
}

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, canWalk, canEat)

const person = new Person('Santosh');

function Goldfish(name) {
    this.name = name;
}

Object.assign(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish('shiny');

