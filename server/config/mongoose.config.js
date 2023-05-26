const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/jokes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Estas conectado a la base de datos"))
  .catch((err) =>
    console.log("Algo salio mal al conectarse a la base de datos", err)
  );
