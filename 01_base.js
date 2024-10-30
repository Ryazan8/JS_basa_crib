const number = 42
// number = 52 // error

let lastName =  'Smith'
lastName = 'Jones'

let _$lastName_$5 = 'Name'
// let 5error = 'Tom' // error

//  operators

let currentYear = 2024
const birthYear = 2003

let age = currentYear - birthYear
age++
age += 1
age = age + 1
age -= 3

// console.log(age > 32); // false
// console.log(age >= 21); // true
// console.log(age == '21'); // true
// console.log(age === '21'); // false

// datatypes

// console.log(typeof true); // boolean
// console.log(typeof ''); // string
// console.log(typeof 21); // number
// console.log(typeof {a: 1}); // object
// let x
// console.log(x); // undefined
// console.log(typeof null); // object
// console.log(null); // null
// console.log(typeof Symbol('a')); // symbol
// console.log(typeof 10n) // bigint
// console.log(typeof BigInt(10)) // bigint
// console.log(typeof NaN) // number (Not a Number)
// console.log(10 / undefined) // NaN

// if statement

const myStatus = 'pending' // ready, pending, failed

// if(myStatus === 'ready') {
//     console.log('Lets go');
// } else if (myStatus === 'pending') {
//     console.log('Be prepared'); // this
// } else {
//     console.log('Failed');
// }

// function

function calcAge(year) {
    const date = new Date().getFullYear() - year
    if (date <= 0) {
        return 'you are not born yet'
    }
    return date
}
// console.log(calcAge(2003)) // 21
// console.log(calcAge(2025)) // you are not born yet


// array

const cars = ['Tesla', 'Porshe', 'BMW']
// console.log(cars.length); // 3
// console.log(cars[0]); // Tesla
// console.log(cars.length - 1); // BMW (last element)

// for (let i = 0; i < cars.length; i++) {
//     // console.log(cars[i]); // Tesla, Porshe, BMW
//     const car = cars[i]
//     // console.log(car); // Tesla, Porshe, BMW
//     console.log(car.toUpperCase()); // TESLA, PORSHE, BMW
// }

for (let car of cars) {
    // console.log(car); // Tesla, Porshe, BMW
}
cars.push('Audi')
// console.log(cars) // Tesla, Porshe, BMW, Audi
cars.unshift('Lada')
// console.log(cars) // Lada, Tesla, Porshe, BMW, Audi

const lastCar = cars.pop()
// console.log(lastCar) // Audi
const firstCar = cars.shift()
// console.log(firstCar) // Lada

// Object

const person = {
    firstName: 'Alexandr',
    lastName: 'Ryazanov',
    year: 2003,
    languages: ['en', 'ru', 'de'],
    isProgrammer: true,
    greet() {
        console.log('Hello from person')
    }
}

// console.log(person.firstName) // Alexandr
// console.log(person['lastName']) // Ryazanov
const key = 'year'
// console.log(person[key]); // 2003
// person.greet() // Hello from person