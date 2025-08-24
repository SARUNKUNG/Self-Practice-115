// // date 19/8/25684

// // function Declaration
// function multiply1( a , b) {
//     return a * b
// }

// // Function expression (using arrow function syntax)
// const multiply2 = (a,b) => a*b     // ถ้าใส่ปีกกา จะต่องใส่ return


// //function expression (using function declaration) 
// const multiply3 = function(a,b){return a*b}

// console.log(multiply1(4,5));
// console.log(multiply2(6,2));
// console.log(multiply3(1,7));

// console.log(typeof(multiply1));
// const x = multiply1
// const y = multiply2
// const z = multiply3
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// function doSomeThing(x){
//     return x(3,5)
// }

// console.log(doSomeThing(multiply1)); // pass function to another function


// // return function as value of another function
// function saygoodbye() {
//     return 'good bye'
// }
// function doSomeThing() {
//     return saygoodbye
// }

// console.log(doSomeThing()()); //good byr

// //dosomething()[first ()] => saygodbye()[second ()]

// function myFunc(theObject) {
//     theObject.model = 'A9999'
// }
// const product = {model : 'A10001' , price : 199}
// console.log(product.model); // A1001

// myFunc(product)
// console.log(product.model); //A9999

// // ------------------------------------------------------------------

// function sum(x,y , ...z){
//     // return x + y 
//     // return argrument[0] + argrument[1]
//     for(argu of arguments){
//         console.log(argu);
//     }
// }
// console.log(`lenght: ${arguments.length}`);
// console.log(`x: ${x}`);
// console.log(`y: ${y}`);
// console.log(`z: ${z}`);

// function sum2(x, y, ...z) {
//     let result = 0
//     for (argu of arguments) {
//         result += argu;
//     }
//     return result
// }
// console.log(sum2(2,4,5,6,8));


// function greeting(greet = 'hello' , whom = 'guest' , qoute = 'how are you ?') {
//     return `${greet} ${whom} ${qoute}`
// }
// console.log(greeting('hi'));  //hi guest how are you
// console.log(greeting('good morning' , 'guy' , 'greate')); //good morning
// console.log(greeting(undefined , null , 'find')); // hello null find
// console.log(greeting()); // hello guest how are you


//  function sum(num1, num2, num3) {
//  return num1 + num2 + num3
//  }
//  let nums = [5 , 15 , 20 ]
//  //spread parameter
//  console.log(sum(...nums)) //40


 function getFreqOfWords(sentence) {
    let word = sentence.toLowerCase().split(' ')
    let duplicate = 0
    for (const word of sentence) {
        
    }
 }
 

 console.log(getFreqOfWords('Hello how are You todays'));
 