
const removeaddressController = (req, res, db) => {
    const { id } = req.body;
    db('address')
        .where('id', '=', id)
        .del()
        .returning('name')
        .then(name => res.json(name))
}

module.exports = {removeaddressController : removeaddressController}