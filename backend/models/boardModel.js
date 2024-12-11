const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lists: [
    {
      name: String,
      cards: [String]
    }
  ]
});

module.exports = mongoose.model('Board', boardSchema);

