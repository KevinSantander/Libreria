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
exports.Revista = void 0;
var Publicacion_1 = require("./Publicacion");
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(pAnio, pEdicion, pNombre, pAutor, pPrecio) {
        var _this = _super.call(this, pNombre, pAutor, pPrecio) || this;
        _this.anio = pAnio;
        _this.edicion = pEdicion;
        return _this;
    }
    Revista.prototype.getAnio = function () {
        return this.anio;
    };
    Revista.prototype.setAnio = function (pAnio) {
        this.anio = pAnio;
    };
    Revista.prototype.getEdicion = function () {
        return this.edicion;
    };
    Revista.prototype.setEdicion = function (pEdicion) {
        this.edicion = pEdicion;
    };
    return Revista;
}(Publicacion_1.Publicacion));
exports.Revista = Revista;
