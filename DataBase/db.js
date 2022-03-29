const mongoose = require('mongoose');
exports.dbConnect = () =>{
    mongoose.connect(process.env.DATA,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
    
}