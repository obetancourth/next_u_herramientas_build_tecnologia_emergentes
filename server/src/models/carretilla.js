const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

let Carretilla = new Schema({
  "usuario": {type: String, required:true},
  "producto": {type: String, required:true},
  "nombre": {type:String},
  "cantidad": {type: Number, required: true},
  "precio": {type: Number, required: true},
  "fecha": {type: Date },
  "url": {type: String}
});

Carretilla.static("userCart", function(user, cb){
  return this.find({"usuario":user}, cb);
});

module.exports = mongoose.model("Carretilla", Carretilla, "carretilla");
