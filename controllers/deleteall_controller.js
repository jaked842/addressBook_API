
const DeleteAllController = (req, res, db) => {
    db('address')
    .truncate()
}

module.exports = {DeleteAllController : DeleteAllController}