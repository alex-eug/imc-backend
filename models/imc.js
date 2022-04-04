const mongoose = require('mongoose');

const imcSchema = mongoose.Schema(
    {
        imc: { type: Number, required: true },
        user_id:{type: String}
            },
    { timestamps: true }
);



module.exports = mongoose.model('imc', imcSchema);