import { Persona } from "./Clases/Persona";
import { Cliente } from "./Clases/Cliente";
import { Publicacion } from "./Clases/Publicacion";
import { Libro } from "./Clases/libro";
import { Revista } from "./Clases/Revista";
import { Libreria } from "./Clases/Libreria";

let listaDeEscritores = ['J.K Rowling','Stephen King', 'Gabriel Garcia Marquez'];
let listaDeGeneros = ['Ciencia ficion', 'Terror', 'Realismo magico'];

let libroUno = new Libro ('Terror', 852,'No tiene un resumen', 'Cuento de hadas','Stephen King',9800);
let libroDos = new Libro ('Dramatico', 208, 'Aca va el resumen', 'Hamlet', 'Willam Shakespeare', 2300 );
let libroTres = new Libro ('No ficcion', 379, 'No tiene un resumen', 'Las venas abiertas de america latina', 'Eduardo Galeano', 4790);

let revistaUno = new Revista (2022, 90, 'America latina hoy', 'Hernan campos parra y Patricio Daniel Navia', 390);
let revistaDos = new Revista (2022, 70, 'Cocinando en casa', 'pepe garcia y soledad lala', 290);
let revistaTres  = new Revista (2022, 81, 'art attack', 'pedro alfonso', 250);

let clienteUno = new Cliente (listaDeEscritores, listaDeGeneros, 30, 'Juan', 'Garcia', 17369421, 'Av siempre viva 114');
let clienteDos = new Cliente (listaDeEscritores, listaDeGeneros, 15, 'Jorge', 'Marquez', 26451351, 'San Matrin 852');
let clienteTres = new Cliente (listaDeEscritores, listaDeGeneros, 10, 'Laura', 'Romano', 31258521, 'Isla de los estados 612');

let listaClientes = [clienteUno, clienteDos, clienteTres];
let listaLibros = [ libroUno, libroDos, libroTres];
let listaRevistas = [revistaUno, revistaDos, revistaTres];

let libreria = new Libreria (listaLibros, listaRevistas, listaClientes);


console.log(' El precio del libro de: ' + libroTres.getNombre() + ' es de: ' + '$'+ libroTres.getPrecio() + ' Suscrito -Lectores abanzados- 30%  ' + '$'+ libreria.descuento(clienteUno,libroTres) + ' para el cliente ' + clienteUno.getNombre() + ' ' + clienteUno.getApellido());
console.log(' El precio de la revista de ' + revistaUno.getNombre() + ' es de: ' + '$'+ revistaUno.getPrecio() + ' suscrito -Lectores Media- 15% ' + '$'+ libreria.descuento(clienteDos,revistaUno) + ' para el cliente ' + clienteDos.getNombre() + ' ' + clienteDos.getApellido());
