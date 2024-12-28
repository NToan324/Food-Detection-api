const mongoose = require('mongoose');
const os = require('os')
const process  = require('process')
const _SECOND  = 5000

function checkCountConnect() {
    const count = mongoose.connections.length
    console.log('Number of connections: ', count) 
}

function checkOverLoad() {
    setInterval(() => {
        const count = mongoose.connections.length
        const numCors = os.cpus().length
        const memory = process.memoryUsage().rss

        maxConnection = numCors * 5

        console.log(`Number of connections: ${count}`)
        console.log(`Memory usage: ${memory / 1024 / 1024} MB`)

        if(count > maxConnection) {
            console.log('Overload')
        }

    }, _SECOND)
}

module.exports = {
    checkCountConnect,
    checkOverLoad
}