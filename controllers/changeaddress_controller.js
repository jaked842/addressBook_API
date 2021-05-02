const { default: knex } = require("knex")

const changeaddressController = (req, res, db) => {

        const { list } = req.body
        let arr = [...list]

        arr.map((value, index) => {
            db('address')
            .insert({
                name: value.name,
                address: value.address,
                phone: value.phone
            })
            .returning('name')
            .then(response => {
                if (index + 1 === arr.length){
                    res.json('ChangeMade')
                }
            })
        })
}

module.exports = {changeaddressController : changeaddressController}