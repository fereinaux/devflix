const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  bio: String,
  avatar: {
    type: String,
    required: true
  },
  repos: [
    {
      id: Schema.Types.ObjectId,
      name: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      languages: [String]
    }]
}, {
  timestamps: true
});

module.exports = model('Dev', DevSchema);