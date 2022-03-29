const mongoose = require('mongoose');

const imcSchema = mongoose.Schema(
    {
        imc: { type: Number, required: true }
            },
    { timestamps: true }
);



module.exports = mongoose.model('imc', imcSchema);