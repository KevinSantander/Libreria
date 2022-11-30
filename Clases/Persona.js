"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pApellido, pDni, pDireccion) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dni = pDni;
        this.direccion = pDireccion;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (pDni) {
        this.dni = pDni;
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.setDireccion = function (pDireccion) {
        this.direccion = pDireccion;
    };
    return Persona;
}());
exports.Persona = Persona;
