//Triangle, Circle, and Square classes

class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(){}

}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
    return `<rect x="75" y="50" width="150" height="150" fill="${this.color}" />`;
  }
}


class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}


class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<polygon points="150,25 275,175 25,175" fill="${this.color}" />`;
  }
}

module.exports = {Square, Circle, Triangle}