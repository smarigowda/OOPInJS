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
      let output = '<select>\n';
      this.items.forEach(d => {
          output += `\t<option>${d}</option>\n`
      });
      ;
      return this.items.length > 0 ? `${output}</select>` : null;
  }
}

// click function is not included when we setup prototype chain
// using Object.create
HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;



const e1 = new HTMLElement();
const e2 = new HTMLSelectElement();

e2.addItem("1");
e2.addItem("2");
e2.addItem("3");
e2.addItem("4");

e2.removeItem("2");
console.log(e2);
e2.render();
