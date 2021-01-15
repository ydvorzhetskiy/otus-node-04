const {PassThrough} = require('stream')
const fs = require('fs')

const d = new PassThrough()

fs.createReadStream(__filename).pipe(d)  // can be piped from readable stream

d.pipe(process.stdout)                 // can pipe to writable stream
d.on('data', buffer => console.log(buffer.data))
