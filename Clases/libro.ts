import { Publicacion } from "./Publicacion";

export class Libro extends Publicacion {
  private generoLiterario: string;
  private cantidadDePaginas: number;
  private resumen: string;

  public constructor(pGeneroLiterario: string, pCantidadDePaginas: number, pResumen: string, pNombre: string, pAutor: string, pPrecio: number) {
    super(pNombre, pAutor, pPrecio);
    this.generoLiterario = pGeneroLiterario;
    this.cantidadDePaginas = pCantidadDePaginas;
    this.resumen = pResumen;
  }

  public getGeneroLiterario(): string {
    return this.generoLiterario;
  }

  public setGeneroLiterario(pGeneroLiterario: string): void {
    this.generoLiterario = pGeneroLiterario;
  }

  public getCantidadDePaginas(): number {
    return this.cantidadDePaginas;
  }

  public setCantidadDePaginas(pCantidadDePaginas: number): void {
    this.cantidadDePaginas = pCantidadDePaginas;
  }

  public getResumen(): string {
    return this.resumen;
  }

  public setResumen(pResumen: string): void {
    this.resumen = pResumen;
  }
  
}