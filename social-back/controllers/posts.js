import express from 'express';
import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const getPostsByCreator = async (req, res) => {
  const { creator } = req.query;

  try {
    const posts = await PostMessage.find({ creator });

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const createPost = async (req, res) => {
  const post = req.body;
 
  const newPost = new PostMessage({...post, creator: req.userId});

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
export const likePost = async (req, res) => {
  const { id } = req.params;

  if(!req.userId) return res.json({message: 'Unauthenticated'});

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id===String(req.userId));

  if(index === -1){
    post.likes.push(req.userId);
  } else{
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post , { new: true });
  
  res.json(updatedPost);
}
export const disLikePost = async (req, res) => {
  const { id } = req.params;
  if(!req.userId) return res.json({message: 'Unauthenticated'});

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
  const post = await PostMessage.findById(id);

  const index = post.dislikes.findIndex((id) => id===String(req.userId));

  if(index === -1){
    post.dislikes.push(req.userId);
  } else{
    post.dislikes = post.dislikes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
  
  res.json(updatedPost);
}
export default router;
