//import modules needed
const inquirer = require('inquirer');
const fs = require('fs');
const {Shapes} = require('./lib/shapes.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to 3 characters for your logo name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter a color for the logo name(color name or HEX value):',
            name: 'nameColor',
        },
        {
            type: 'list',
            message: 'Please select a shape:',
            name: 'shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: 'Enter a color for the shape (color name or HEX value):',
            name: 'shapeColor',
        },
    ])
    .then((data) => {
        console.log(data);
        const {name, nameColor, shape, shapeColor} = data;
       
        
        const svgStr = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
        </svg>
   
        `;
        
    fs.writeFile("./examples/logo.svg", svgStr, function(err){
        if(err){
            console.log(err);
        }
        console.log("Generated logo.svg");
    });
});