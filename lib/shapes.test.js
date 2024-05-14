//Require in our shapes file
const {Circle, Triangle, Square} = require('./shapes.js')

//Tests for circle, triangle and square classes -the first describe is for the suite - the second is a function to execute

describe('Circle Tests', () => {
    test('will this return my svg code', () => {
        const circle = new Circle('a', 'b', 'c')
        expect(circle.render())
          .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="b" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="a">c</text>

</svg>`);
  })
})


describe('Square Tests', () => {
    test('will this return my svg code', () => {
        const square = new Square('a', 'b', 'c')
        expect(square.render())
          .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="75" y="50" width="150" height="150" fill="b" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="a">c</text>

</svg>`);
  })
})

describe('Triangle Tests', () => {
    test('will this return my svg code', () => {
        const triangle = new Triangle('a', 'b', 'c')
        expect(triangle.render())
          .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150,25 275,175 25,175" fill="b" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="a">c</text>

</svg>`);
  })
})



