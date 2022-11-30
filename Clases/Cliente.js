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
exports.Cliente = void 0;
var Persona_1 = require("./Persona");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(pAutores, pGeneros, pDescuento, pNombre, pApellido, pDni, pDireccion) {
        var _this = _super.call(this, pNombre, pApellido, pDni, pDireccion) || this;
        _this.autores = pAutores;
        _this.generos = pGeneros;
        _this.descuento = pDescuento;
        return _this;
    }
    Cliente.prototype.getAutores = function () {
        return this.autores;
    };
    Cliente.prototype.setAutores = function (pAutores) {
        this.autores = pAutores;
    };
    Cliente.prototype.getGeneros = function () {
        return this.generos;
    };
    Cliente.prototype.setGeneros = function (pGeneros) {
        this.generos = pGeneros;
    };
    Cliente.prototype.getDescuentos = function () {
        return this.descuento;
    };
    Cliente.prototype.setDescuentos = function (pDescuento) {
        this.descuento = pDescuento;
    };
    return Cliente;
}(Persona_1.Persona));
exports.Cliente = Cliente;
