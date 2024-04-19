const mongoose = require('mongoose')

const EncounterSchema = new mongoose.Schema({
    name: String,
    rating: Number
})

const Encounter = mongoose.model('Encounter', EncounterSchema)
module.exports = Encounter