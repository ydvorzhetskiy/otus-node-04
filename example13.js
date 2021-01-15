const { Readable } = require('stream')

async function * generate() {
    yield 'a'
    yield 'b'
    yield 'c'
}

const readable = Readable.from(generate())

readable.on('data', (chunk) => {
    console.log(chunk)
})
