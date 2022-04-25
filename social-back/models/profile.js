import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  interests: [String],
  friends: [String],
  bio: String,
  about: String,
  createdAt: {
    type: Number,
    default: 0,
  },
  following: {
    type: Number,
    default: 0,
  },
  followers: {
    type: Number,
    default: 0,
  }
});

const ProfileMessage = mongoose.model('ProfileMessage', profileSchema);

export default ProfileMessage;