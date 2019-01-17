const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema ({
    name: { type: String, required: true, unique: true},
    hair_color: {type: String, default: 'blonde'},
    eye_color: String,
    dob: Date,
    loves: [{type: String}],
    location: String,
    gender: String,
    victims: {type: Number, min: 0}
});

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;