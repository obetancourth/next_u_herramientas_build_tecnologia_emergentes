const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

let Productos = new Schema({
  "nombre": {type: String, required:true},
  "precio": {type: Number, required:true},
  "stock": {type: Number},
  "usuario": {type: String},
  "descripcion": {type: String }
});

module.exports = mongoose.model("Productos", Productos, "productos");
