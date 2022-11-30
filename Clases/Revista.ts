import { Publicacion } from "./Publicacion";

export class Revista extends Publicacion {
  private anio: number;
  private edicion: number;

  public constructor (pAnio: number, pEdicion: number, pNombre: string, pAutor: string, pPrecio: number) {
    super(pNombre, pAutor, pPrecio);
    this.anio = pAnio;
    this.edicion = pEdicion;
  }
  
  public getAnio(): number {
    return this.anio;
  }

  public setAnio(pAnio: number): void {
    this.anio = pAnio;
  }

  public getEdicion(): number {
    return this.edicion;
  }

  public setEdicion(pEdicion: number): void {
    this.edicion = pEdicion;
  }
  
}