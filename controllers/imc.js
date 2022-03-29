const Imc = require('../models/imc');

// insertion des résultats de l'imc en bdd
exports.createImc =(req, res) => {
    try{
        const {imc} = req.body
        console.log(imc);
        Imc.create({imc})
        .then(() => res.status(201).json({ message: 'imc enregistrée !' }))
        .catch(error => res.status(400).json({ error }));
        console.log("imc créé");
    }catch(error){
        throw new Error("no user create : " + error )
    }


}
