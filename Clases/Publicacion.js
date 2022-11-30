"use strict";
exports.__esModule = true;
exports.Publicacion = void 0;
var Publicacion = /** @class */ (function () {
    function Publicacion(pNombre, pAutor, pPrecio) {
        this.nombre = pNombre;
        this.autor = pAutor;
        this.precio = pPrecio;
    }
    Publicacion.prototype.getNombre = function () {
        return this.nombre;
    };
    Publicacion.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Publicacion.prototype.getAutor = function () {
        return this.autor;
    };
    Publicacion.prototype.setAutor = function (pAutor) {
        this.autor = pAutor;
    };
    Publicacion.prototype.getPrecio = function () {
        return this.precio;
    };
    Publicacion.prototype.setPrecio = function (pPrecio) {
        this.precio = pPrecio;
    };
    return Publicacion;
}());
exports.Publicacion = Publicacion;
