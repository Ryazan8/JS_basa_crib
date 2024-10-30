// const interval = setInterval(() => {
//     console.log('interval after 2 sec')
// }, 2000)
//
// setTimeout(() => {
//     clearInterval(interval)
// }, 7000)

// const delay = (fn, wait = 1000) => {
//     setTimeout(fn, wait)
// }
// delay(() => {
//     console.log('after 2 sec')
// }, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve()
            reject('My error in promise')
        }, wait)
    })
    return promise
}

// delay(2500).then(() => {
//     const num = 40
//     return num
// })
//     .then((myNumber) => console.log('after 2 sec', myNumber))
//     .catch((err) => console.log(err))
//     .finally(()  => console.log('anyway'))

const getData = () => new Promise((r) => r([1, 1, 2, 3, 5, 8, 13]))
// getData().then((data) => console.log(data))

async function asyncExample() {
    try{
        await delay(3000)
        const data  = await getData()
        console.log(data);
    } catch (e) {
        console.log(e);
    } finally {
        console.log('finally')
    }
}
asyncExample()

