const express = require('express');
let router = express.Router(),
    Producto = require('./models/productos');

router.get('/all', (req, res)=>{
  if(!(req.session.user && true)) {
    return res.json([]);
  }
  Producto.find({}, (err, productos)=>{
      if(err) {return res.json([])}
      return res.json(productos);
  });
});// all

router.get('/search/:data', (req, res, next)=>{

  let _data = decodeURI(req.params.data);
  Producto.find({ nombre: new RegExp("^"+ _data, "i") }, (err, prods)=>{
    if(err) return res.json([]);
    res.json(prods);
  });
}); //get search

router.post('/new', (req, res)=>{
    let _producto = {... req.body};
    let _productoIns = new Producto(_producto);
    _productoIns.save(function(err, _sproducto){
      if(err) return res.send("Error al guardar producto");
      return res.json({ "id": _sproducto._id});
    });
});

router.post('/delete/:id', (req, res)=>{
  let _id = req.body.id;
  let _cid = req.params.id;
  if(_id === _cid){
    Producto.findByIdAndDelete(_id, function(err, rslt){
      if(err){
        return res.send("Error al eliminar producto");
      }
      return res.send("Producto Eliminado");
    });
  }else{
    return res.send("Error al eliminar producto, parametros comprometidos");
  }
}); //

module.exports = router;
