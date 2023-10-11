

// @Desc:   Get Beliefs
// @Route:  GET /api/beliefs
// @Access: Private
const getBeliefs = (req, res) => {
    res.status(200).json({ message: 'Get Beliefs' });

};


// @Desc:   Create Beliefs
// @Route:  Post /api/beliefs
// @Access: Private
const createBeliefs = (req, res) => {
    res.status(200).json({ message: 'Create Beliefs' });

};

// @Desc:   Update Beliefs
// @Route:  Put /api/beliefs/:id
// @Access: Private
const updateBeliefs = (req, res) => {
    res.status(200).json({ message: `Update beliefs ${req.params.id}` });

};


// @Desc:   Delete Beliefs
// @Route:  Delete /api/beliefs/:id
// @Access: Private
const deleteBeliefs = (req, res) => {
    res.status(200).json({ message: `Delete beliefs ${req.params.id}` });

};

module.exports = {
    getBeliefs,
    createBeliefs,
    updateBeliefs,
    deleteBeliefs
};