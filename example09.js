const fs = require('fs');
const util = require('util');
const stream = require('stream');

const finished = util.promisify(stream.finished)

const rs = fs.createReadStream(__filename)

async function run() {
    await finished(rs)
    console.log('Stream is done reading.')
}

run().catch(console.error)
rs.resume()
