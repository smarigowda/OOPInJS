function HTMLElement() {
  this.click = function() {
    console.log("click function...");
  };
}

HTMLElement.prototype.focus = function() {
  console.log("focus function...");
};

function HTMLSelectElement() {
  this.items = [];
  this.addItem = item => {
    this.items.push(item);
  };
  this.removeItem = item => {
    console.log(this.items);
    this.items = this.items.filter(d => {
      console.log(d);
      return d !== item;
    });
  };
}

HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const e1 = new HTMLElement();
const e2 = new HTMLSelectElement();

e2.addItem("1");
e2.addItem("2");

e2.removeItem("2");
console.log(e2);