const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3907;
const kepler = require("./routes/Kepler");
const hh = require("./routes/hh");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(kepler);
app.use(hh);

app.listen(port, () => {
  console.log(`SERVER corriendo en http://localhost:${port}`);
});
