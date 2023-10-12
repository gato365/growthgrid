const mongoose = require('mongoose');

const beliefsSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: null
    },
    conviction: {
        type: Number,
        default: 0,
        required: [true, 'Please add a conviction']
    }

});