
const changeaddressController = (req, res, db) => {
    const {newName, newAddress, newNumber, id } = req.body
    const updateName = (newName, id) => {
        db('address').orderBy('id')
        .update({
            name: newName
        })
        .where('id', '=', id)
        .returning('name')
        .then(name => res.json(name))
    }
    
    const updateAddress = (newAddress, id) => {
        db('address')
        .update({
            address: newAddress
        })
        .where('id', '=', id)
        .returning('address')
        .then(address => res.json(address))
    }

    const updateNumber = (newNumber, id) => {
        db('address')
        .update({
            phone: newNumber
        })
        .where('id', '=', id)
        .returning('phone')
        .then(number => res.json(number))
    }

    if(newName) {
        updateName(newName, id)
    } else if (newAddress) {
        updateAddress(newAddress, id)
    } else if (newNumber) {
        updateNumber(newNumber, id)
    }
    
}

module.exports = {changeaddressController : changeaddressController}