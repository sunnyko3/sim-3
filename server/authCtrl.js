const bcrypt = require('bcryptjs')
const saltRounds=10

module.exports = {

    register: async (req, res) => {

        const db = req.app.get('db')
        const {email, password} = req.body

        const inUse = await db.email_in_use([email])
        if (+inUse[0].count !== 0) {
            return res.status(200).send({message: 'email already in use'})
    }
    

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const hashId = await db.add_hash(hash)
        const {hash_id} = hashId[0]
        await db.create_user({email, hash_id})
        const createdUser = await db.create_user({email, hash_id})

        req.session.user = {id: createdUser[0].cust_id, email}
        res.status(200).send({message: 'Logged in!', userData:  req.session.user})
        
}}     