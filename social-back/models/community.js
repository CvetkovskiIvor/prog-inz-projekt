import mongoose from 'mongoose';

const communitySchema = mongoose.Schema({
  name: String,
  creator: String,
  tags: [String],
  coverPhoto: String,
  profilePhoto: String,
  bio: String,
  members: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const CommunityMessage = mongoose.model('CommunityMessage', communitySchema);

export default CommunityMessage;