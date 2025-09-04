
//first try
export const pi = 3.14159;

export function areaCircle(r) {
    return pi * r * r;
}

export function greet(name) {
    return `Hello, ${name}`;
}

export class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hi, my name is ${this.name}`;
    }
}

// second try
export const e = 2.718;
export function square(x) {
    return x * x;
}
export function cube(x) {
    return x * x * x;
}

// third try
export default function welcome(name) {
    return `Welcome, ${name}!`;
}

export function shout(text) {
    return text.toUpperCase();
}

export const defaultGreeting = "Hello World";