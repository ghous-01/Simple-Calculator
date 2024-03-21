#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Type First number", type: "input", name: "firstNumber" },
  { message: "Type Second number", type: "input", name: "secondNumber" },
  {
    message: "Select a valid operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Convert input strings to numbers
const firstNumber = parseFloat(answer.firstNumber);
const secondNumber = parseFloat(answer.secondNumber);

// Check if input is valid
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  // Perform arithmetic operation based on selected operator
  switch (answer.operator) {
    case "Addition":
      console.log(firstNumber + secondNumber);
      break;
    case "Subtraction":
      console.log(firstNumber - secondNumber);
      break;
    case "Multiplication":
      console.log(firstNumber * secondNumber);
      break;
    case "Division":
      if (secondNumber === 0) {
        console.log("Cannot divide by zero.");
      } else {
        console.log(firstNumber / secondNumber);
      }
      break;
    default:
      console.log("Invalid operator selected.");
      break;
  }
}
