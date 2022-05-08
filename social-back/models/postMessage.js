import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  profilePicture: String,
  likeCount: {
    type: Number,
    default: 0
  },
  // likes:{
  //   type:[String],
  //   default: [],
  // },
  disLikeCount: {
    type: Number,
    default: 0
  },
    // dislikes:{
  //   type:[String],
  //   default: [],
  // },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;