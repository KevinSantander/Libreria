"use strict";
exports.__esModule = true;
exports.Libreria = void 0;
var Libreria = /** @class */ (function () {
    function Libreria(pCliente, pLibro, pRevista) {
        this.cliente = pCliente;
        this.libro = pLibro;
        this.revista = pRevista;
    }
    Libreria.prototype.getCliente = function () {
        return this.cliente;
    };
    Libreria.prototype.setCliente = function (pCliente) {
        this.cliente = pCliente;
    };
    Libreria.prototype.getLibro = function () {
        return this.libro;
    };
    Libreria.prototype.setLibro = function (pLibro) {
        this.libro = pLibro;
    };
    Libreria.prototype.getRevista = function () {
        return this.revista;
    };
    Libreria.prototype.setRevista = function (pRevista) {
        this.revista = pRevista;
    };
    Libreria.prototype.descuento = function (cliente, pProducto) {
        var precioConDescuento = 0;
        precioConDescuento = pProducto.getPrecio() - (pProducto.getPrecio() * cliente.getDescuentos() / 100);
        return precioConDescuento;
    };
    return Libreria;
}());
exports.Libreria = Libreria;
