const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://Kai:AEXepNeXDY5x0H2N@cluster0.anxbw3l.mongodb.net/test', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db