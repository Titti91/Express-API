let mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const temperatureModel = new Schema({
    date: { type: Date   },
    value: { type: Number }
})
module.exports = mongoose.model('temperatures', temperatureModel);
