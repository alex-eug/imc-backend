const mongoose = require('mongoose');
exports.dbConnect = () =>{
    mongoose.connect(process.env.MONGODB_URI || process.env.URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
    
}