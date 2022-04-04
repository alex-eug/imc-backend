const Imc = require('../models/imc');
const user = require('../models/user');
const User = require('./user')

// insertion des résultats de l'imc en bdd
exports.createImc = (req, res) => {
    try {
        const {user_id} = req.body
        const { imc } = req.body

        // const user_id = req.params.id
        console.log('yy', req.body);
        
        console.log(imc);
        Imc.create({ user_id, imc })
            .then(() => res.status(201).json({ message: 'imc enregistrée !' }))
            .catch(error => res.status(400).json({ error }));
        console.log("imc créé");
    } catch (error) {
        throw new Error("no user create : " + error)
    }


}
