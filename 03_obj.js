const person = {
    firstName: 'Alexandr',
    lastName: 'Ryazanov',
    year: 2003,
    languages: ['en', 'ru', 'de'],
    isProgrammer: true,
    'complex key': 'smth',
    ['key_' + (1 + 2)]: 42,
    greet() {
        console.log('Hello from person')
    },
    arrow: () => console.log('arrow'),
    info: function () {
        console.log('My name is', this.firstName)
    },
    notFound: 42 // add key
}
// person.arrow() // arrow
// person.info() // My name is  Alexandr

delete person.arrow
// console.log(person); // all obj , but don`t have arrow`s key

const {firstName, lastName, year, notFound = 404} = person
// console.log(notFound); // 404
// console.log(notFound); // 42

// console.log(Object.keys(person)); // получим массив , состоящий из строк , которые являются ключами объекта
// Object.keys(person).forEach(key => console.log(person[key])); // получим значения объекта

const person2 = {firstName: 'Maxim'}
// const bound = person.info.bind(person2)
// bound() // My name is Maxim

// person.info.call(person2) // My name is Maxim
