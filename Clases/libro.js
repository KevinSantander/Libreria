"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Libro = void 0;
var Publicacion_1 = require("./Publicacion");
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(pGeneroLiterario, pCantidadDePaginas, pResumen, pNombre, pAutor, pPrecio) {
        var _this = _super.call(this, pNombre, pAutor, pPrecio) || this;
        _this.generoLiterario = pGeneroLiterario;
        _this.cantidadDePaginas = pCantidadDePaginas;
        _this.resumen = pResumen;
        return _this;
    }
    Libro.prototype.getGeneroLiterario = function () {
        return this.generoLiterario;
    };
    Libro.prototype.setGeneroLiterario = function (pGeneroLiterario) {
        this.generoLiterario = pGeneroLiterario;
    };
    Libro.prototype.getCantidadDePaginas = function () {
        return this.cantidadDePaginas;
    };
    Libro.prototype.setCantidadDePaginas = function (pCantidadDePaginas) {
        this.cantidadDePaginas = pCantidadDePaginas;
    };
    Libro.prototype.getResumen = function () {
        return this.resumen;
    };
    Libro.prototype.setResumen = function (pResumen) {
        this.resumen = pResumen;
    };
    return Libro;
}(Publicacion_1.Publicacion));
exports.Libro = Libro;
