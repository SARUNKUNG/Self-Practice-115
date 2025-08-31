//object
// Q1. Create & Access
// สร้าง object book ที่มี property title, author, year และพิมพ์ออกมาทีละค่า
let book = {title : 'Adventure in the magical forest' , author : 'Kin' , year : 2005}
console.log(`Question 1. : ${book.title}`);
console.log(`Question 1. : ${book.author}`);
console.log(`Question 1. : ${book.year}`);


// Q2. Add & Delete Property
// เพิ่ม property pages = 328 และลบ year ออก
book.color = 'yellow'
delete book.year 
console.log(`Question 2 : ${book}`);


// Q3. Loop with for...in
// ใช้ for...in แสดง key และ value ของ book
for (let item in  book){
    console.log(`Question 3 : key : ${item} , value : ${book[item]}`);
    
}

// Q4. Object Method
// เพิ่ม method getSummary() ที่ return string "1984 by George Orwell"
book.getSummary = ()=>  '1984 by George Orwell'
console.log(`Question 4 : ${book.getSummary()}`);



// Q5. Nested Object
// สร้าง object library ที่เก็บ books เป็น array ของ object 2 เล่ม แล้วพิมพ์ชื่อหนังสือทั้งหมด
let library = {
    book : [
        {title : 'Star wars' , author : 'Kin' } ,
        {title : '7 prirate' , author : 'Chain'}
    ]
}
console.log(library.book);




//array
// Q1. Basic Operations
// สร้าง array fruits เพิ่ม "mango" เข้าท้าย แล้วลบตัวแรกออก
let fruit = [ 'apple' , 'orange' , 'banana']
fruit.push('mango')
fruit.shift()
console.log(`array question 1 : ${fruit}`);


// Q2. Sum Numbers
// ให้ nums = [1,2,3,4,5] คำนวณผลรวม
let total = 0
let num = [1,2,3,4,5]
for (let i = 0 ; i <= num.length ; i++){
    total += i
}
console.log(total);



// Q3. Map
// ใช้ map คูณทุกค่าด้วย 3
let multiply = num.map(item => item * 3)
console.log(multiply);


// Q4. Filter
// ใช้ filter เลือกเลขคู่
let fillNum = num.filter(item => item % 2 === 0)
console.log(fillNum);


// Q5. Reduce
// ใช้ reduce หาเลขมากที่สุดใน nums
let max = num.reduce((a, b) => (a > b ? a : b));
console.log(max);


//oop
// Q1. Create Class
// สร้างคลาส Person ที่มี name และ sayHi()

class Person {
    constructor(name , age) {
        this.name = name
        this.age = age
    }
    sayHi(){
        return 'HI' + ' ' + this.name 
    }
    introduce(){
        return `my name is ${this.name}` // this is from question number 2
    }
}

let police = new Person('Kin' , 20)
console.log(police.sayHi());


// Q2. Class with Method
// เพิ่ม method introduce() ที่พิมพ์ "My name is Ann"
 console.log(police.introduce());
 

// Q3. Inheritance
// สร้าง Student ที่ extends Person2 และเพิ่ม studentId
class student extends Person{
    constructor(name , age , studentID ){
        super( name ,age)
        this.studentID = studentID
    }
}
let students = new student('Kin', 20, '12345');
console.log(students);

// Q4. Encapsulation (private field)
// สร้าง BankAccount ที่ซ่อน #balance
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}
const acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance());


// Q5. Polymorphism
// สร้าง Animal ที่มี method speak() และให้ Dog , Cat extends แล้ว override method
class Animal {
  speak() {
    console.log("This animal makes a sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}
const a = new Animal();
const d = new Dog();
const c = new Cat();
a.speak();
d.speak();
c.speak();
