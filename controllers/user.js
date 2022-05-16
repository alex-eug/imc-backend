const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/user');

//create a user 
exports.createUser = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
                userName:req.body.userName
            });
            // console.log(User);
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé' }))
                .catch(() => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
}

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(401).json({ error: "cette utilisateur n'existe pas!" })
            }
            bcrypt.compare(req.body.password, user.password)
                .then(egal => {
                    if (!egal) {
                        return res.status(401).json({ error: 'Votre mot de passe est incorrect !' });
                    }
                    res.status(200).json([{
                        userId: user._id,
                        userName:user.userName,
                        token: jwt.sign(
                            { userId: user._id,
                            userName:user.userName },
                            process.env.SECRET,
                            { expiresIn: '24h' }
                        )
                    }]);
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}
    exports.deleteUser = async (req,res) => {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const userId = decodedToken.userId;
        let user = await User.findOne({ _id: userId })
        User.findOneAndDelete({ _id: userId })
        .then( res.status(401).json({ message: 'utilisateur supprimé!' }))
        .catch(error => res.status(500).json({ error }))
            
               
    }   
        
            
        
        
    