// filter function dosen't change an original array
// const words = [ 'mango' ,'apple', 'mangosteen' , 'orange', 'mangoes']
//1.annonymous arrow function
// const shortWords = words.filter((word) => word.length <= 6)

//2. annonymous function declaration
// const shortWords = words.filter(function (word){
//    return word.length <=6
// } )

//3. reuse callback function (name function)
// function wordlength(word){
//     return word.length <=6

// const shortWords = words.filter(wordlength)
// const shortWords = words.filter(wordlength('apple'))
// console.log(words);
// console.log(shortWords);

//sort function changes original array
// const sortedWords = words.sort()
// console.log(words);
// console.log(sortedWords);

// const wordToUppercase = words.map(word => word.toUpperCase())
// console.log(wordToUppercase);


// const students = [
//   { id: 1, name: "Somchai Jaidee" },
//   { id: 2, name: "Suda Deejai" },
//   { id: 3, name: "John Smith" },
// ]

const words = [ 'mango' ,'apple', 'mangosteen' , 'orange', 'mangoes']
// const checkARR = (words.find((words) => words.toLowerCase().includes('apple'))? 'has apple ' : 'does not have apple');
// console.log(checkARR);
 

const product = [1,'red',102]
const productDetail = product.reduce((detail , prop) => {
    return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
} , '') //1R102
console.log(productDetail);


//find cart total and return object that show total {total : 1080}
const cart = [
    {productID : 1001 , price : 500 , quantity : 2} ,
    {productID : 1002 , price : 10 , quantity : 3} ,
    {productID : 1003 , price : 5 , quantity : 10 } 
]


// cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
cart.push({ productId: 5555, price: 1, quantity: 4 })
console.log(cart)
console.log(cart.pop()) //{ productId: 5555, price: 1, quantity: 4 }
console.log(cart.length) //3

console.log(cart.shift());


const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
words1.splice(2,1, 'banana') //replace mangosteen with banana
console.log(words1);


words1.splice(3,3 ) //remove the last two words
console.log(words1);

words1.splice(  2 , 0 , 'melon' , 'apple') // add melon and cherry after apple 
console.log(words1);

 