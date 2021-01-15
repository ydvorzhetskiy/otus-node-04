async function get(n) {
    return new Promise(r => setTimeout(() => r(n), n * 1000))
}

async function* asyncGenerator(arr) {
    let anyResolve

    arr.map(get).forEach(async request => {
        const anyResult = await request;
        anyResolve(anyResult)
    })

    while (true) {
        yield await new Promise((resolve) => {
            anyResolve = resolve
        })
    }
}

(async function () {
    for await (let num of asyncGenerator([4, 3, 2, 1, 0])) {
        console.log(num)
    }
})()
