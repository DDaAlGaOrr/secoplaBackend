const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3908;
const kepler = require("./routes/Kepler");
const hh = require("./routes/hh");
const SecoplAxis = require("./routes/SecoplaAxis");


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(kepler);
app.use(hh);
app.use(SecoplAxis);


app.listen(port, () => {
  console.log(`SERVER corriendo en http://localhost:${port}`);
});
