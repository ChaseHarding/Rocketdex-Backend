//DEPENDENCIES
const router = require('express').Router();
const Location = require('../models/Location.js')

router.get('/', async (req, res) => {
    try {
        const foundLocations = await Location.find()
        console.log('Found locations:', foundLocations)

        res.status(200).json(foundLocations)

    } catch (error) {
        console.log('Error fetching locations:', error)
        res.status(500).json({error: 'Failed to fetch locations'})
    }
})

module.exports = router