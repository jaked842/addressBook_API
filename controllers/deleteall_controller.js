
const deleteallController = (req, res, db) => {
    db('address')
    .truncate()
    .then(res.send('Removed'))
}

module.exports = {deleteallController : deleteallController}