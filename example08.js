const {Writable} = require('stream')

const data = []

const writable = new Writable({
  write(chunk, encoding, callback) {
    data.push(chunk.toString())
    callback()
  }
});

writable.on('finish', () => {
  console.log(data)
  console.log('All writes are now complete.')
})

writable.write('some data')
writable.end('done writing data')
