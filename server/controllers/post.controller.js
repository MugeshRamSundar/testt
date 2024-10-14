const createPost = (req, res, next) => {
  try {
    // const { title, description } = req.body;
    console.log(req.body);

    res.status(201).json({
      success: "success",
      message: "Post created successfully!",
    });
  } catch (error) {
    return new Error("Error in create post!");
  }
};

module.exports = { createPost };
