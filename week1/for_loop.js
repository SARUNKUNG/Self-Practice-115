// for loop 
// Q1. Basic Counting เขียน for loop แสดงตัวเลขตั้งแต่ 1 ถึง 10

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// เขียน for loop คำนวณผลรวมของตัวเลขตั้งแต่ 1 ถึง 100 แล้วพิมพ์ผลลัพธ์ออกมา

let total = 0
for (let i = 0 ; i <= 100 ; i++){
    total += i
}

console.log(total);

// ให้ผู้ใช้กำหนดเลข (เช่น 5) แล้วเขียน for loop แสดงตารางสูตรคูณของเลขนั้น (เช่น 5 × 1, 5 × 2 … ถึง 5 × 12)
let num = 5

for (let i = 1 ; i <= 12 ; i++){

    console.log(`${i} * ${num} = ${num * i}`);
}

// เขียน for loop คำนวณค่า n! (เช่น 5! = 5 × 4 × 3 × 2 × 1) โดยให้ n เป็นตัวเลขที่กำหนดไว้

let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`${n}! = ${factorial}`);

// Q5. Star Pattern (Pyramid)
// เขียน for loop แสดงรูปแบบดาวดังนี้ (จำนวนแถว = 5)
let star = ''
for (let i = 1 ; i <= 5 ; i++){
  console.log(star += '*');
}

// for in 
// Q1. Basic Iteration
// ให้มี object
const person = { name: "Ann", age: 22, city: "Bangkok" };
// เขียน for...in เพื่อพิมพ์ key ของ object
for(let key in person ){
  console.log(key);
  
}

// Q2. Show Key & Value
// ใช้ object เดิม พิมพ์ทั้ง key และ value ออกมา
for (let key in person) {
  console.log(key + ": " + person[key]);
}


// Q3. Count Properties
// ใช้ for...in นับจำนวน property ของ object person
let count = 0;
for (let key in person) {
  count++;
}
console.log("Total properties = " + count);


// Q4. Filter Numbers
// ให้ object
const scores = { math: 80, eng: 72, sci: 90, art: 65 };
// ใช้ for...in พิมพ์เฉพาะวิชาที่ได้คะแนน มากกว่า 75
for (let subject in scores) {
  if (scores[subject] > 75) {
    console.log(subject + " = " + scores[subject]);
  }
}



// Q5. Copy Object
// ให้ object
const product = { id: 101, name: "Laptop", price: 25000 };
// ใช้ for...in คัดลอกค่าลงใน object ใหม่ชื่อ productCopy แล้วพิมพ์ออกมา
let productCopy = {};

for (let key in product) {
  productCopy[key] = product[key];
}

console.log(productCopy);


// Q1. Basic Iteration
// ให้ array
const fruits = ["apple", "banana", "mango"];
// เขียน for...of เพื่อพิมพ์ผลไม้แต่ละชนิดออกมา
for (let fruit of fruits) {
  console.log(fruit);
}


// Q2. Sum Numbers
// ให้ array
const numbers = [10, 20, 30, 40];
// ใช้ for...of คำนวณผลรวมของตัวเลข
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log("Sum = " + sum);


// Q3. Uppercase Strings
// ให้ array
const animals = ["cat", "dog", "bird"];
// ใช้ for...of แปลงเป็นตัวพิมพ์ใหญ่แล้วพิมพ์ออกมา
for (let animal of animals) {
  console.log(animal.toUpperCase());
}

// Q4. Find Even Numbers
// ให้ array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ใช้ for...of พิมพ์เฉพาะเลขคู่
for (let n of nums) {
  if (n % 2 === 0) {
    console.log(n);
  }
}

// Q5. Nested Array
// ให้ array ซ้อน
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];
// ใช้ for...of ซ้อนกันเพื่อพิมพ์ทุกค่าที่อยู่ใน matrix
for (let row of matrix) {
  for (let value of row) {
    console.log(value);
  }
}