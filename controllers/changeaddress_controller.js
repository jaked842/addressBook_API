
const changeaddressController = (req, res, db) => {
    const { oldName, newName, oldAddress, newAddress, oldNumber, newNumber } = req.body
    const updateName = (oldName, newName) => {
        db('address')
        .update({
            name: newName
        })
        .where('name', '=', oldName)
        .returning('name')
        .then(name => res.json(name))
    }
    
    const updateAddress = (oldAddress, newAddress) => {
        db('address')
        .update({
            address: newAddress
        })
        .where('address', '=', oldAddress)
        .returning('address')
        .then(address => res.json(address))
    }

    const updateNumber = (oldNumber, newNumber) => {
        db('address')
        .update({
            phone: newNumber
        })
        .where('phone', '=', oldNumber)
        .returning('phone')
        .then(number => res.json(number))
    }

    if(oldName) {
        updateName(oldName, newName)
    } else if (oldAddress) {
        updateAddress(oldAddress, newAddress)
    } else if (oldNumber) {
        updateNumber(oldNumber, newNumber)
    }
    
}

module.exports = {changeaddressController : changeaddressController}