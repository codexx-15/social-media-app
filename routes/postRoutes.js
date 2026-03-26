const router = require("express").Router();
const Post = require("../models/Post");
const auth = require("../middleware/authMiddleware");

// Create post
router.post("/", auth, async (req, res) => {
  const post = await Post.create({
    user: req.user.id,
    content: req.body.content
  });
  res.json(post);
});

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find().populate("user");
  res.json(posts);
});

// Like post
router.put("/like/:id", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes.push(req.user.id);
  await post.save();
  res.json(post);
});

module.exports = router;
