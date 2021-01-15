process.on('uncaughtException', e => {
    console.log('stopped');

    Error.captureStackTrace(e);
    e.stack = e.stack.replace(/.*node/, '.')
    console.log(e.stack)
})

console.log('started')

throw new Error('new error')



