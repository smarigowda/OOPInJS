function HTMLElement() {
  this.click = function() {
    console.log("click function...");
  };
}

HTMLElement.prototype.focus = function() {
  console.log("focus function...");
};

function HTMLSelectElement(items = []) {
  this.items = items;
  this.addItem = item => {
    this.items.push(item);
  };
  this.removeItem = item => {
    // console.log(this.items);
    this.items = this.items.filter(d => {
    //   console.log(d);
      return d !== item;
    });
  };
  this.render = function () {
    return `<select>\n${this.items.map(item => `   <option>${item}</option>\n`).join('')}</select>`
  }
}

// click function is not included when we setup prototype chain
// using Object.create
HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

function HTMLImageElement(src) {
    this.src = src;
    this.render = function() {
        return `<img src='${this.src}'></img>`;
    }
}
HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;

const list = [
    new HTMLSelectElement(['1', '2', '3']),
    new HTMLImageElement()
];

list.forEach(el => {
    console.log(el.render());
})