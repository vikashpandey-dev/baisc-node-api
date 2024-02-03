const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    descss: { type: String},
});

const Productmodel = mongoose.model('Product', productSchema);

module.exports = Productmodel;

