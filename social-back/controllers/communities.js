import  CommunityMessage from "../models/community.js";
import express from 'express';

const router = express.Router();


export const getCommunities = async (req, res) => {
  try {
    const communities = await  CommunityMessage.find();

    console.log(communities);

    res.status(200).json(communities);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createCommunity = async (req, res) => {
  const community = req.body;
 
  const newCommunity = new  CommunityMessage(community);

  try {
    await newCommunity.save();

    res.status(201).json(newCommunity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export default router;
