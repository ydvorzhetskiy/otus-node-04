process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  console.log(`chunk: ${chunk}`);
})

process.stdout.write('end\n')
// console.log('end')
