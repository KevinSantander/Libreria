import { Cliente } from "./Cliente";
import { Publicacion } from "./Publicacion";
import { Libro } from "./libro";
import { Revista } from "./Revista";

export class Libreria {
  private cliente: Cliente[];
  private libro: Libro[];
  private revista: Revista[];

  public constructor (pCliente:Cliente[], pLibro: Libro[], pRevista: Revista[]) {
    this.cliente = pCliente;
    this.libro = pLibro;
    this.revista = pRevista;
  }

  public getCliente(): Cliente[] {
    return this.cliente;
  }

  public setCliente(pCliente: Cliente[]): void {
    this.cliente = pCliente;
  }

  public getLibro(): Libro[] {
    return this.libro;
  }

  public setLibro(pLibro: Libro[]): void {
    this.libro = pLibro;
  }

  public getRevista(): Revista[] {
    return this.revista;
  }

  public setRevista(pRevista: Revista[]): void {
    this.revista = pRevista;
  }

  public descuento(cliente: Cliente, pProducto: Publicacion,): number {
    let precioConDescuento = 0;
    precioConDescuento = pProducto.getPrecio() - (pProducto.getPrecio() * cliente.getDescuentos()/100);
    return precioConDescuento;
  }

}