const Imc = require('../models/imc');
const jwt = require('jsonwebtoken');

const User = require('../models/user')

// insertion des résultats de l'imc en bdd
exports.createImc = async (req, res) => {
    try {
        const { imc } = req.body
        // const user_id = req.params.id
        // console.log('yy', req.body);
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const userId = decodedToken.userId;
        // console.log('userId', userId);
        let user = await User.findOne({ _id: userId })
        console.log('coucou', user);
        const newImc = await Imc.create({ imc })
        await user.updateOne({ $push: { imc_id: newImc._id } })
        console.log('newImc', newImc._id);
        resstatus(200).json('imc créé')
    } catch (error) {
        throw new Error("no user create : " + error)
    }

}

exports.displayImc = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const userId = decodedToken.userId;
        // console.log('userId', userId);
        //recupération de l'utilisateur
        let user = await User.findOne({ _id: userId })
        //récuperation des imc correspondant à l'utilisateur
        const goodImc = await Imc.find({ _id: user.imc_id })
        const javaScriptRelease = Date.parse(user.createdAt);
        console.log(javaScriptRelease);
        console.log('coucou31', user.createdAt);
        // goodImc.createAt.forEach(elm=> Date.parse(elm))]
        res.status(200).json([goodImc])
        console.log('hoho', goodImc);
        
    //    const theNewArray =   goodImc.map(elm =>elm.createdAt =  Date.parse(elm.createdAt))
    //     console.log('lol',theNewArray);

    }
    catch (error) {
        throw new Error("no user found : " + error)
    }
}