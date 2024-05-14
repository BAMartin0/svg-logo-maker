//Include Inquirer for prompts
const inquirer = require("inquirer");
const fs = require("fs")
const {Square, Circle, Triangle} =require("./lib/shapes")



// prompts 
const questions = [
  {
    type: "input",
    name: "text",
    message: "What (3 character) text would you like?",
    validate: function (input) {
      return input.length === 3 || "Text must be exactly 3 characters!";
    },
  },

  {
    type: "input",
    name: "textColor",
    message:
      "What color would you like your text to be?(keyword or hexadecimal number)",
  },

  {
    type: "list",
    name: "shape",
    message: "Choose a shape.",
    choices: ["square", "circle", "triangle"],
  },

  {
    type: "input",
    name: "shapeColor",
    message:
      "What color would you like your shape to be?(keyword or hexadecimal number)",
  },
];



//function to generate logo

function generateLogo(text, textColor, shape, shapeColor) {
    
    let element;

    switch (shape) {
        case 'square':
            element = new Square(textColor, shapeColor, text);
            break; 
        case 'circle':
            element = new Circle(textColor, shapeColor, text);
            break; 
        case 'triangle':
            element = new Triangle(textColor, shapeColor, text);
            break; 
        default:
            throw new Error('Invalid shape')
    }
    
    return element

}



//Write to svg file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
      if (err) {
      console.log(err);
    } else {
        console.log("Generated logo.svg");
    }
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(({shape, text, textColor, shapeColor}) => { 
       const pageContent= generateLogo(text, textColor, shape, shapeColor); 
        
        
        writeToFile('logo.svg', pageContent.render())
    });
}

// Function call to initialize app
init();