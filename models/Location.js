const mongoose = require('mongoose')
const {Schema} = mongoose

const locationSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    encounters: [{
        type: Schema.Types.ObjectId,
        ref: 'Encounters'
    }]
}, {collection: 'Locations'})

const Location = mongoose.model('Location', locationSchema)
module.exports = Location