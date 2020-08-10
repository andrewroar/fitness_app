const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3010;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use(require("./routes/route.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
