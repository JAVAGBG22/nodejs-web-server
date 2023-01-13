const Post = require("../models/post");

// create new post
// /api/post

exports.create = async (req, res) => {
  try {
    const post = await new Post({
      title: req.body.title,
      ...req.body,
    }).save();
    res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Post creation failed!");
  }
};

exports.listAll = async (req, res) => {
  const allPosts = await Post.find({}).sort({ createdAt: 1 }).exec();
  res.json(allPosts);
};
