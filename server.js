const express = require('express');
const exphbs = require('express-handlebars'); // Template Engine
const path = require('path');
const sequelize = require('./config/connection');
const session = require('express-session')
const routes = require('./controllers');
const hbs = exphbs.create({});
const PORT = process.env.PORT || 8000;
const app = express();
const fontawesome = require('@fortawesome/fontawesome-free')

const SequelizeStore = require('connect-session-sequelize')(session.Store)


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public'))); // Will attempt to serve static files from public directory if no route is matched



// View engine setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {maxAge: 24 * 60 * 60 * 1000}, // 1 day in milliseconds
  resave: false,
  saveUninitialized : true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(session(sess));

// Routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
})