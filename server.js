const express =  require('express');
const path = require("path");
const routes = require("./routes");
const db = require("./database/models");

const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Starts the server to begin listening and sync sequelize models
// =============================================================
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
    });
  })