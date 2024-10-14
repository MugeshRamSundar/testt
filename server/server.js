const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/test", (req, res, next) => {
  res.status(200).json({
    message: "Hello from the server!",
  });
});

const router = require("./routes/post.routes");

app.use("/api/v1/post", router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
