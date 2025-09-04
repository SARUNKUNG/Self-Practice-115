// first import
import { pi, areaCircle, greet, User } from './Export.js';
//second import
import { e, square, cube } from './Export.js';
//third import
import welcome, { shout, defaultGreeting } from './Export.js';



//first try
console.log("question 1 :", "ค่า pi =", pi);
console.log("question 1 :", "พื้นที่วงกลมรัศมี 5 =", areaCircle(5));
console.log("question 1 :", greet("Somchai"));

let user1 = new User("Suda");
console.log("question 1 :", user1.sayHi());

// ---------------------------------------------------------------
//second try

console.log("question 2 : e =", e);
console.log("question 2 : square(4) =", square(4));
console.log("question 2 : cube(3) =", cube(3));

// ---------------------------------------------------------------
// third try
console.log("question 3:", welcome("Leo")); 
console.log("question 3:", shout("javascript")); 
console.log("question 3:", defaultGreeting); 