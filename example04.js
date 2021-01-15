const fs = require('fs')

const request = fs.createReadStream(__filename);

let body = []
request
    .on('data', (chunk) => {
        body.push(chunk);
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();

        console.log(body);
    });
