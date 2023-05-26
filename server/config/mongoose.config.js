mongoose
  .connect("mongodb://localhost/jokes_db", {
    newUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Estas conectado a la base de datos"))
  .catch((err) =>
    console.log("Algo salio mal al conectarse a la base de datos", err)
  );
