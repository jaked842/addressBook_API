
const addController = (req, res, db) => {
    const { name, address, phone } = req.body;
    db('address')
        .insert({
            name: name,
            address: address, 
            phone: phone
        })
        .returning('name')
        .then(name => res.json(name))
}

module.exports = {addController: addController};