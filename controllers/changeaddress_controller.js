const { default: knex } = require("knex")

const changeaddressController = (req, res, db) => {

        const { list } = req.body
        let arr = [...list]


        arr.map((value, index) => {
            let ph = '';
            for (i = 0; i < value.phone.length; i++) {
                ph += value.phone.charAt(i).replace('-', '')
            }

            db('address').insert({
                name: value.name,
                address: value.address,
                phone: ph
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