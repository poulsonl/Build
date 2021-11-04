const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const db = require('./config/keys');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();

//Body-parser config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Passport configuration
app.use(passport.initialize());
require('./config/passport')(passport);

//Let's write our first route
app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//Connect to db
mongoose.connect(db.mongoURI)
  .then(() => console.log('Mongodb connected'))
  .catch((err) => console.log (err));

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));