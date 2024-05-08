//Include Inquirer for prompts
const inquirer = require('inquirer');
const fs = require('fs')



// prompts 
const questions = [
  {
    type: "input",
    name: "text",
    message: "What (3 character) text would you like?",
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
    choices: [square, circle, triangle],
  },

  {
    type: "input",
    name: "shapeColor",
    message:
      "What color would you like your shape to be?(keyword or hexadecimal number)",
  },
];





//




//




//Write to svg file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File created succesfully");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => { 
            const pageContent = generateMarkdown(response); 

            fs.writeFile('logo.svg', pageContent, (err) => err ? console.log(err) : console.log('File created successfully'))
         });
}

// Function call to initialize app
init();