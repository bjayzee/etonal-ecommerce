const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: String,
    image: String
},
{
    timestamps: true
})

module.exports = Category = model('category', categorySchema);