const http = require('http');

const server = http.createServer((req, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/html')

  response.write('<html>')
  response.write('<body>')
  response.write('<h1>Hello, World!</h1>')
  response.write('</body>')
  response.write('</html>')
  response.end();

})

server.listen(3000, '127.0.0.1', () => console.log(`Server running`))
