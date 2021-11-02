import mongoose from 'mongoose'
const {Schema} = mongoose

const hourScheme = new Schema({
    _id: String,
    start: Date,
    end: Date
})


module.exports = hourScheme