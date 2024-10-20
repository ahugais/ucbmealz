require('dotenv').config(); // Load environment variables
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const CASStrategy = require('passport-cas').Strategy;

const app = express();
const PORT = process.env.PORT || 5001;

// Set up session middleware
app.use(session({
  secret: process.env.SECRET_KEY || 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Set up CAS strategy for Passport
passport.use(new CASStrategy({
  version: 'CAS3.0',
  ssoBaseURL: process.env.CAS_SSO_BASE_URL,
  serverBaseURL: process.env.SERVER_BASE_URL
}, (login, done) => {
  // Extract relevant user information from CAS response
  const user = {
    id: login.user, // User ID from CAS
    name: login.attributes.displayname || login.attributes.commonname, // Display name
    email: login.attributes.mail // Email from CAS attributes
  };
  console.log('CAS login successful:', user); // Debugging
  return done(null, user);
}));

// Serialize user into session
passport.serializeUser((user, done) => {
  console.log('Serializing user:', user); // Debugging
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
  console.log('Deserializing user:', user); // Debugging
  done(null, user);
});

// Initialize Passport and restore session state
app.use(passport.initialize());
app.use(passport.session());

// CAS login route
app.get('/login', passport.authenticate('cas'));

// Logout route
app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

// Home route with authentication check
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Hello, ${req.user.name}! Your email is ${req.user.email}.`);
  } else {
    res.send('You are not authenticated. <a href="/login">Login</a>');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
