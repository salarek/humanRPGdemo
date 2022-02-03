const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.ab0qq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
const DIR = "./public/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("File type not accepted (.png, .jpg, .jpeg)"));
    }
  },
});
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.post("/signup", upload.array("avatar", 8), (req, res) => {
  console.log("KURWY", req.body);
  const reqFiles = [];
  const url = req.protocol + "://" + req.get("host");
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + "/public/" + req.files[i].filename);
  }
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    avatar: reqFiles,
    password: bcrypt.hashSync(req.body.password, 10),
    level: 0,
    processlevel: 0,
    categories: "",
    items: "",
    activity: 0,
  });
  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: err,
      });
    }
    return res.status(200).json({
      title: "signup success",
    });
  });

  // const newUser = new User({
  //   email: req.body.email,
  //   name: req.body.name,
  //   avatar: {
  //     data: fs.readFileSync(
  //       path.join(__dirname + "/uploads/" + req.body.avatar)
  //     ),
  //     contentType: "image/png",
  //   },
  //   password: bcrypt.hashSync(req.body.password, 10),
  //   level: 0,
  //   processlevel: 0,
  //   categories: "",
  //   items: "",
  //   activity: 0,
  // });
});
app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err)
      return res.status(500).json({
        title: "server error",
        error: err,
      });
    if (!user) {
      return res.status(401).json({
        title: "user not found",
        error: "invalid credentials",
      });
    }
    //incorrect password
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: "login failed",
        error: "invalid credentials",
      });
    }
    //if is good create token and send to frontedn
    let token = jwt.sign({ userId: user._id }, "secretKey");
    return res.status(200).json({
      title: "login success",
      token: token,
    });
  });
});

//grabbing user info
app.get("/user", (req, res) => {
  let token = req.headers.token;
  jwt.verify(token, "secretKey", (err, decoded) => {
    if (err)
      return res.status(401).json({
        title: "unauthorized f",
      });
    //token valid
    User.findOne({ _id: decoded.userId }, (err, user) => {
      if (err) return console.log(err);
      return res.status(200).json({
        title: "user grabbed",
        user: {
          email: user.email,
          name: user.name,
          level: user.level,
          processlevel: user.processlevel,
          categories: user.categories,
          items: user.items,
          activity: user.activity,
        },
      });
    });
  });
});

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("listen on port", port);
});
