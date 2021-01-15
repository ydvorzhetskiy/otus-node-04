const {Readable} = require('stream')

const data = [];

const readable = new Readable({
    objectMode: true,
    read() {
    }
})

readable.on('data', (data) => {
    console.log(data)
})

readable.push({a: 1})
