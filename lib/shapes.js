//Triangle, Circle, and Square classes

class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(){}

}

class Square extends Shape {
    super(color) { }
    
    render() {
    return `The color of this square is ${this.color}`;
  }
}


class Circle extends Shape {
  super(color) {}

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}


class Triangle extends Shape {
  super(color) {}

  render() {
    return `The color of this triangle is ${this.color}`;
  }
}

module.export = {Triangle, Circle, Square}