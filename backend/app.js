const express = require('express'); //Importing the express framework
const bodyParser = require('body-parser'); //Importing the body-parser module

//Creating the express server
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false })); //For encoded body

//Adding headers to fix the CORS error
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods',
  'GET, POST, PATCH, DELETE, PUT, OPTIONS');
  next();
});

//Creating the post verb to emulate an persistence action
app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  })
});

//Creating the get verb to get dummy posts
app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'sdaf1234',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'sdaf4321',
      title: 'Second server-side post',
      content: 'This is coming from the server!'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
