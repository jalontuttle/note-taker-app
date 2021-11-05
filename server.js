const express = require('express');
// const apiRoute = require("./routes/apiroute");
const htmlRoute = require("./routes/indexroute");

const PORT = process.env.port || 3001;


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// apiRoute(app);
htmlRoute(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);