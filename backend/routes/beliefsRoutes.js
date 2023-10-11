const express = require('express');
const router = express.Router();
const { getBeliefs } = require('../controllers/beliefsController');


router.get('/', getBeliefs);


router.post('/', (req, res) => { 
    res.status(200).json({message: 'Create Beliefs'});
});
router.put('/:id', (req, res) => { 
    res.status(200).json({message: `Update beliefs ${req.params.id}`});
});

router.delete('/:id', (req, res) => { 
    res.status(200).json({message: `Delete beliefs ${req.params.id}`});
});


module.exports = router;