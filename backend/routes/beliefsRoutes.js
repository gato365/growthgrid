const express = require('express');
const router = express.Router();
const { getBeliefs,
    createBeliefs,
    updateBeliefs,
    deleteBeliefs, 
} = require('../controllers/beliefsController');


router.route('/').get(getBeliefs).post(createBeliefs);
router.route('/:id').put(updateBeliefs).delete(deleteBeliefs);




module.exports = router;