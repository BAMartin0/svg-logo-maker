//Require in our shapes file
const Shape = require('./shapes.js')

//Tests for circle, triangle and square classes -the first describe is for the suite - the second is a function to execute

describe('Shape', () => {
    describe('modulus', () => {
        it('should', () => {
            const total = 0; 
            const shape = new Shape(); 
            expect(shape.modulus(2,2).toEqual(total))
        })
    })
})