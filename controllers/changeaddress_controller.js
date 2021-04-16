
const changeaddressController = (req, res, db) => {
    const { list } = req.body
    list.forEach(element => {
        db('address')
        .insert({
            name: element.name,
            address: element.address,
            phone: element.phone
        })
    })
    .returning('name')
    .then(name => res.json(name))
}

module.exports = {changeaddressController : changeaddressController}