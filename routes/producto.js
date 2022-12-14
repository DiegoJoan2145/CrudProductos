const express = require('express');
const router = express.Router();
const productoCotroller = require('../controllers/productoController');
const multer = require('multer');
const upload = multer();

router.post('/',  upload.none(), productoCotroller.crearProducto);
router.get('/', productoCotroller.obtenerProductos);
router.put('/:id', productoCotroller.actualizarProductos);
router.delete('/:id', productoCotroller.eliminarProductos);

module.exports = router;