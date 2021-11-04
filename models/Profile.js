const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  location: {
    type: String
  },
  bio: {
    type: String,
    required: true
  },
  interests: {
    type: [String]
  },
   goals: {
     type: String
   },
   lookingfor: {
     type: String
   },
    yearsclimbing: {
      type: Number
    },
    disciplines: {
        type: [String]
    },
    onsightgrade: {
      type: Number
    },
    projectgrade: {
      type: Number
    },
   social: {
    website: {
      type: String
    },
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }   
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);