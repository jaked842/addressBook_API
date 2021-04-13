
const addresslistController = (req, res, db) => {
    db.select('*').from('address')
    .then(response => res.json(response))
}

module.exports = { addresslistController : addresslistController }