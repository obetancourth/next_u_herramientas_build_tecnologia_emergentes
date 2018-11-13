const mongoose = require('mongoose'),
      Usuario = require('../src/models/usuarios'),
      Producto = require('../src/models/productos')
      ;

let userTemplate = {
  useremail : 'someemail@email.com',
  username  : 'NextUser1',
  userpswd  : 'Ne%tUs3r1',
  userfchnac: new Date(1984,5,23)
};

let productTemplate = {
  "nombre": "",
  "precio": 0,
  "stock": 10,
  "usuario": '',
  "descripcion": "",
  "url":""
}

let productosName = [ "aguacate", "arandanos", "canela", "kiwi", "lychee",
  "manzana", "pasta", "tomate", "ajo", "brocoli", "cebolla", "limon",
  "naranja", "pimienta", "zanahoria", "almendras", "calabaza", "fresa",
  "maiz", "papa", "repollo"
]

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  let user = new Usuario(userTemplate);
  // guardando usuarios
  //
  user.save((err)=>{
    if(err) console.log(err);
    console.log("Usuario Guardado");
    console.log("Preparando Productos a Guardar");
    let _newProductos = productosName.map( (prd, i)=>{
      return {...productTemplate ,
        nombre: prd,
        precio: Math.round(Math.random() * 100 , 2),
        descripcion: `Detalle de ${prd}`,
        url: `/imgs/${prd}.jpg`
      }
    } );
    Producto.collection.insert(_newProductos, (err, prds)=>{
      if(err) return console.log(err);
      console.log("Productos Agregados");
      mongoose.disconnect();
    });
  })
});;
mongoose.connect('mongodb://localhost/next');
