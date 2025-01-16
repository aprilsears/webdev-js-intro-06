// Prevent us from attempting to use variables
// that are not declared
"use strict"
/* Simple for Loop: for (initialization; condition; increment/decrement) {
    // logic
}
*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}

/* While Loop */

let a = 0;
while (a < 5) {
    console.log(a);
    a++;
}   

/* do ....while Loop */
let b = 0;
do {
    console.log(b);
    b++;
} while (b < 5);

/* break statement:  example iterates through the elements in an array until it finds the index of an element whose value is theValue */

for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
      break;
    }
  }

  /* break statement: breaking to a label */

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

  /* continue statement: example shows a while loop with a continue statement that executes when the value of i is 3. Thus, n takes on the values 1, 3, 7, and 12.*/
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
// Logs:
// 1 3 7 12

