import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const PostMessages = await PostMessage.find();
    // console.log(PostMessage);
    res.status(200).json(PostMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const Message = req.body;
  const newPostMessage = new PostMessage(Message);

  try {
    await newPostMessage.save();
    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
