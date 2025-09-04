// Q1. Function Declaration
// เขียนฟังก์ชัน add ที่รับ 2 ตัวเลขและ return ผลบวก
function add(a, b) {
    return a + b;
}
console.log("Q1:", add(5, 7)); 


// Q2. Function Expression (Anonymous Function)
// เขียนฟังก์ชันลบเลข (sub) โดยใช้ function expression
const sub = function(a, b) {
    return a - b;
}
console.log("Q2:", sub(10, 3)); 


// Q3. Arrow Function
// เขียนฟังก์ชันคูณ (mul) โดยใช้ arrow function
const mul = (a, b) => a * b;
console.log("Q3:", mul(4, 6)); 


// Q4. Pass Function as Argument
// เขียนฟังก์ชัน doOperation ที่รับฟังก์ชันคำนวณ (เช่น add, sub, mul) และเลข 2 ตัว
function doOperation(func, x, y) {
    return func(x, y);
}
console.log("Q4:", doOperation(add, 3, 8)); 
console.log("Q4:", doOperation(mul, 3, 8)); 


// Q5. Return Function
// เขียนฟังก์ชัน greeting ที่ return ฟังก์ชันอีกตัว
function greeting() {
    return function(name) {
        return `Hello, ${name}`;
    }
}
console.log("Q5:", greeting()("Somchai")); 


// Q6. Pass Object to Function
// เขียนฟังก์ชัน updatePrice ที่แก้ไข property ใน object
function updatePrice(product, newPrice) {
    product.price = newPrice;
}
let product = { model: "A100", price: 200 };
updatePrice(product, 500);
console.log("Q6:", product); 


// Q7. Arguments Object
// เขียนฟังก์ชัน sumAll ที่รับจำนวน arguments ไม่จำกัดและหาผลรวม
function sumAll() {
    let total = 0;
    for (let arg of arguments) {
        total += arg;
    }
    return total;
}
console.log("Q7:", sumAll(1,2,3,4,5)); // 15


// Q8. Rest Parameter
// เขียนฟังก์ชัน multiplyAll ที่ใช้ ...nums และคืนผลคูณทั้งหมด
function multiplyAll(...nums) {
    return nums.reduce((acc, n) => acc * n, 1);
}
console.log("Q8:", multiplyAll(2,3,4)); 

// Q9. Default Parameters
// เขียนฟังก์ชัน sayHello โดยมี default value เป็น "Hello Guest"
function sayHello(name = "Guest") {
    return `Hello ${name}`;
}
console.log("Q9:", sayHello()); 
console.log("Q9:", sayHello("Suda")); 


// Q10. Spread Operator
// เขียนฟังก์ชัน findMax ที่หาค่าสูงสุด โดยใช้ spread operator
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
let numbers = [10, 25, 7];
console.log("Q10:", findMax(...numbers)); 

