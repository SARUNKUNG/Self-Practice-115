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
