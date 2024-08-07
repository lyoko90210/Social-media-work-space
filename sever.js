const express = require('express');
const db = require('./config/conection');
const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// base url localhost:3001/
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
