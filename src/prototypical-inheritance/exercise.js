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

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items = this.items.filter((data) => {
      return data !== item;
    });
  };
  this.render = function () {
    let list = this.items.map((item) => {
      return `   <option>${item}</option>`;
    });
    return `<select>\n${list.join('\n')}
</select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const htmlSelectElement = new HtmlSelectElement([1, 2, 3, 4]);
console.log(htmlSelectElement);

function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}">`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const htmlImageElement = new HtmlImageElement("http://");
console.log(htmlImageElement);

const htmlElements = [
  new HtmlSelectElement([1, 2, 3, 4]),
  new HtmlImageElement("http://"),
];

for(let element of htmlElements) {
  console.log(element.render());
}