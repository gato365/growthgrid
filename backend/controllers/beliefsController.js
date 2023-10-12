const asyncHandler = require('express-async-handler');

const Beliefs = require('../models/beliefs');

// @Desc:   Get Beliefs
// @Route:  GET /api/beliefs
// @Access: Private
const getBeliefs = asyncHandler(async (req, res) => {
    const beliefs = await Beliefs.find({});

    res.status(200).json({ beliefs });

});


// @Desc:   Create Beliefs
// @Route:  Post /api/beliefs
// @Access: Private
const createBeliefs = asyncHandler(async (req, res) => {

    console.log(req.body);

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please enter text')
    }
    res.status(200).json({ message: 'Create Beliefs' });

});

// @Desc:   Update Beliefs
// @Route:  Put /api/beliefs/:id
// @Access: Private
const updateBeliefs = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update beliefs ${req.params.id}` });

});


// @Desc:   Delete Beliefs
// @Route:  Delete /api/beliefs/:id
// @Access: Private
const deleteBeliefs = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete beliefs ${req.params.id}` });

});

module.exports = {
    getBeliefs,
    createBeliefs,
    updateBeliefs,
    deleteBeliefs
};