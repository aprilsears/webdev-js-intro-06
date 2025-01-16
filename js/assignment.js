"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
    const num = 3;
    return num % 2 !== 0;
    }


function sumTheNumbers() {
 let sum = 0;
  for (let i = 1; i <= 10; i++) {
         sum += i;
 }

    return sum;

}

    // Write the logic to sum the numbers 1 through 10
    // using a for loop. Check the expected output
    // on the assignment page

function createNumberArray() {
    const numberArray = [];
    for (let i = 0; i < 10; i++) {
        numberArray.push(i);   // Adds the current value of 'i' to the array
      }
    
      return numberArray;
    }
    

    // Write the logic that loops 10 times and adds the value
    // to numberArray each iteration. Check the expected output
    // on the assignment page


function render() {

    evenOrOddElement.textContent = evenOrOdd() ? "Odd" : "Even";
    sumTheNumbersElement.textContent = sumTheNumbers();
    createNumberArrayElement.textContent = createNumberArray().join(", ");
    
    // Call the created functions
    // Used join to convert array to a readable string

}

submissionBtn.addEventListener("click", render);
