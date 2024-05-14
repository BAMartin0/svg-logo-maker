//Triangle, Circle, and Square classes

class Shape {
  constructor(color, shapeColor, text) {
    this.color = color;
    this.text = text;
    this.shapeColor = shapeColor;
  }
}

class Square extends Shape {
    render() {
     
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="75" y="50" width="150" height="150" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150,25 275,175 25,175" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>`;
  }
}

module.exports = { Square, Circle, Triangle };
