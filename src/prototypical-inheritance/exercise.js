function HtmlElement() {
  this.click = function () {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

const htmlElement = new HtmlElement();
console.log(htmlElement);

function HtmlSelectElement(items=[]) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items = this.items.filter((data) => {
      return data !== item;
    });
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const htmlSelectElement = new HtmlSelectElement();
console.log(htmlSelectElement);

