const mongoose = require('mongoose');

let DogModel = {};

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

dogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', dogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = dogSchema;
