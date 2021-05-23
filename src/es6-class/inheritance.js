console.log('---- Inheritance in ES6 ---');

class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    draw() {
        console.log('drawing circle');
    }
}

const c = new Circle('red', 10);
console.log(c);