const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3907
const plaguicidasRoutes = require('./routes/Plagicidas')
const rodenticidaRoutes = require('./routes/Rodenticida')
// const areaGatoRoutes = require('./routes/AreaGato')
const clientes = require('./routes/Clientes')
const edc = require('./routes/Edc')
const edcm = require('./routes/Edcm')
const rnp = require('./routes/Rnp')
const kepler = require('./routes/Kepler')
const sipoc = require('./routes/sipoc')


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(plaguicidasRoutes)
app.use(rodenticidaRoutes)
// app.use(areaGatoRoutes)
app.use(clientes)
app.use(edc)
app.use(edcm)
app.use(rnp)
app.use(kepler)
app.use(sipoc)

app.listen(port, () => {
  console.log(`SERVER corriendo en http://localhost:${port}`);
});