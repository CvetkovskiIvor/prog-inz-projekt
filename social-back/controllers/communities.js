import Community from "../models/community.js";

export const getCommunities = async (req, res) => {
  try {
    const communities = await Community.find();

    console.log(communities);

    res.status(200).json(communities);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createCommunity = async (req, res) => {
  const community = req.body;
 
  const newCommunity = new Community(community);

  try {
    await newCommunity.save();

    res.status(201).json(newCommunity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}