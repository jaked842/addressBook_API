
const addController = (req, res, db) => {
    const { name, address, phone, id } = req.body;
    let ph = '';

    for (i = 0; i < phone.length; i++) {
        ph += phone.charAt(i).replace('-', '')
    }
    db('address')
        .insert({
            name: name,
            address: address, 
            phone: ph, 
            id: id
        })
        .returning('name')
        .then(name => res.json(name))
}

module.exports = {addController: addController};