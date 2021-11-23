const models = require('../models')

module.exports = {
    async listAllUsers(req, res) {
        let r = {}
        r.total = await models.user.count({})
        r.users = await models.user.findAll()

        res.status(200).json(r)

    },

    async listOneUser(req, res) {
        let r = {}
        r.user = await models.user.findOne({ where: { id: req.params.id }, attributes: ['id', 'name', 'surname', 'mail', 'username', 'department'] })
        res.status(200).json(r)
    },

    async getMyOwnData(req, res) {
        
        user = await models.user.findOne({ where: { id: req.params.id } })
        res.status(200).json(user)

    },

    async registerUser(req, res) {

        const r = {}
        console.log(req.body);
        await models.user.create(req.body)
        r.operation = 'Insertion OK'
        await models.user.findAll({})
            .then(data => {
                r.resultAfterOperation = data
                res.status(200).json(r)
            })
            .catch(error => { res.status(413).json(error.message) })
    },

    async updateUser(req, res) {

        const r = {}
        r.operation = `Update from user ${req.body.id} Ok`
        await models.user.update(req.body, { where: { id: req.params.id } })
        await models.user.findAll({ attributes: ['id', 'name', 'surname', 'mail', 'username', 'department'] })
            .then((response) => { 
                r.resultAfterOperation = response
                res.status(200).json(r) 
            })
            .catch(error => { res.status(420).json(error.message) })
    },


    async deleteUser(req, res) {
        await models.user.destroy({ where: { id: req.params.id } })
        await models.user.findAll()
            .then((response) => { res.status(200).json(response) })
            .catch(error => { res.status(420).json(error.message) })
    },

    async checkUser(req, res) {
        await models.user.count({ where: { username: req.params.username } })
            .then((response) => {
                console.log(req.params.name);
                res.status(200).json({ 'total': response })
            })
            .catch(error => { res.status(455).json(error.message) })
    }
}