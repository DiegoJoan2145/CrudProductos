const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    }


});

module.exports = mongoose.model('Producto', ProductoSchema);