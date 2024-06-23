var express = require("express");
var multer = require("multer");
const cors = require("cors");
var jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const fs = require("fs");
var port = 3000;

var app = express();
const secret = "qoiuehwbhecehbc";

// Database connection function
const db_connection = async () => {
  var uri = `mongodb://localhost:27017/user`;
  try {
    await mongoose.connect(uri, { useNewUrlParser: true });
    console.log("connected");
  } catch (err) {
    console.log("not connected", err);
  }
};

// Create user schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
});

// Create user model
const User = mongoose.model("User", UserSchema);

// Image and video storage functionality
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
db_connection();

// APIs
app.post(
  "/profile-upload-single",
  upload.single("profile-file"),
  function (req, res, next) {
    return res.send("response");
  }
);

app.post(
  "/profile-upload-multiple",
  upload.array("profile-files", 12),
  function (req, res, next) {
    return res.send("response");
  }
);

app.post("/signup", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    jwt.sign(req.body, secret, (err, token) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ message: "something went wrong" });
      }
      res.status(201).send({ user: newUser, token });
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ message: "Error creating user", error });
  }
});

app.post("/login", async (req, res) => {
  // console.log("jjjjjjjjjj" , req.body)

  try {
    console.log("Request body:", req.body);
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Check if the password matches (this assumes you have a password hashing and comparison logic)
    // const isMatch = await user.comparePassword(password);
    // if (!isMatch) {
    //     return res.status(401).send({ message: "Invalid credentials" });
    // }

    // Sign the JWT token
    jwt.sign({ userId: user._id, email: user.email }, secret, (err, token) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ message: "something went wrong" });
      }
      res.status(200).send({ user, token });
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).send({ message: "Error logging in user", error });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
