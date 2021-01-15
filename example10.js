const str = 'hi'
const iterator = str[Symbol.iterator]()
console.log(
    iterator.next(), // {value: "h", done: false}
    iterator.next(), // {value: "i", done: false}
    iterator.next(), // {value: undefined, done: true}
    iterator.next()  // {value: undefined, done: true}
);


const iterable = {
    [Symbol.iterator]() {
        let step = 0
        const iterator = {
            next() {
                if (step <= 2) {
                    step++
                }
                switch (step) {
                    case 1:
                        return {value: 'hello', done: false}
                    case 2:
                        return {value: 'world', done: false}
                    default:
                        return {value: undefined, done: true}
                }
            }
        }
        return iterator
    }
}

for (i of iterable) {
    console.log(i)
}
