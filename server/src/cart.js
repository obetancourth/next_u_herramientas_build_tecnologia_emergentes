const express = require('express');
let router = express.Router(),
  Producto = require('./models/productos'),
  Carretilla = require('./models/carretilla');

router.get('/', (req, res, next) => {
  Carretilla.userCart(req.session.user._id, (err, cart) => {
    if (err)
      return res.send("error");
    return res.json(cart||[]);
  });
});

router.post('/add', (req, res, next) => {
  let { cantidad, id } = req.body;
  Producto.findById(id, (err, prd) => {
    if (err) return res.send("Error");
    let { _id, nombre } = prd;
    Carretilla.updateOne(
      { usuario: req.session.user._id, producto: prd._id },
      {
        "$setOnInsert": {
          "fecha": new Date(),
          "precio": prd.precio,
          "nombre": prd.nombre,
          "url": prd.url
        },
        "$inc": { "cantidad": cantidad }
      },
      {
        "upsert":true
      },
      (err, rslt) => {
        if (err) return res.send("error");
        Carretilla.userCart(req.session.user._id, (err, cart) => {
          if (err) {
            console.log(err);
            return res.send("error");
          }
          return res.json(cart);
        });
      }
    );
  });
});

router.delete('/remove/:id', (req, res, next) => {
  let { id } = req.params;
  Carretilla.findByIdAndDelete(id, (err, rst) => {
    if (err) return res.send("error");
    Carretilla.userCart(req.session.user._id, (err, cart) => {
      if (err) return res.send("error");
      return res.json(cart);
    });
  });
});

router.post('/confirm', (req, res, next) => {
  Carretilla.userCart(req.session.user._id, (err, cart) => {
    if (err) return res.send("error");
    cart.map((crtItem, i) => {
      Producto.findByIdAndUpdate(
        crtItem.producto,
        { "$inc": { "stock": (crtItem.cantidad * -1) } },
        (err, rst) => {
          crtItem.remove();
        }
      )
    });
    res.send("ok");
  });
});

module.exports = router;
