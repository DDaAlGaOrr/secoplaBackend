const express = require("express");
const app = express();
const port = 3000
const plaguicidasRoutes = require('./routes/Plagicidas')
const rodenticidaRoutes = require('./routes/Rodenticida')
const areaGatoRoutes = require('./routes/AreaGato')
const clientes = require('./routes/Clientes')
const edc = require('./routes/Edc')
const edcm = require('./routes/Edcm')
const rnp = require('./routes/Rnp')
const kepler = require('./routes/Kepler')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(plaguicidasRoutes)
app.use(rodenticidaRoutes)
app.use(areaGatoRoutes)
app.use(clientes)
app.use(edc)
app.use(edcm)
app.use(rnp)
app.use(kepler)

app.listen(port, () => {
  console.log(`SERVER corriendo en http://localhost:${port}`);
});