
const removeaddressController = (req, res, db) => {
    const { name } = req.body;
    db('address')
        .where('name', name)
        .del('name')
        .then(name => res.json(name))
}

module.exports = {removeaddressController : removeaddressController}