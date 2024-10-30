// Function Declaration

function greet(name) {
    console.log('Hello from', name)
}

// Function Expression

const greet2 = function (name) {
    console.log('2 Hello from', name)
}

// greet('Max')
// greet2('Elena')
//
// console.log(typeof greet) // function

const arror = (name) =>  console.log('Hello from', name)
// arror('Maxim')

const pow2 = (num) => num ** 2 // возводит в степень
// console.log(pow2(5)); // 25

const pow3 = (num = 5) => num ** 2
// console.log(pow3()); // 25

// console.log([1, 2, 3, 4, 5].map((n) => n ** 2 )) // 1, 4, 9, 16, 25
// console.log([1, 2, 3, 4, 5].map(pow2)) // 1, 4, 9, 16, 25
// console.log([1, 2, 3, 4, 5].filter((n) => (n %= 2))) // 1, 3, 5

function sumAll(...all) {
    // let res = 0
    // for (let n of all) {
    //     res += n
    // }
    // return res

    return all.reduce((acc, n) => {
        return acc += n
    }, 0)
}

// console.log(sumAll(1, 2, 3)) // 6
// console.log(sumAll(1, 2, 3, 4, 5)) // 15

function createMember(firstName) {
    return function (lastName) {
        console.log(firstName + ' ' + lastName)
    }
}
const logWithLastName = createMember('John')
logWithLastName('Doe')
logWithLastName('Smith')