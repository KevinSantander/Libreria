import { Persona } from "./Persona";

export class Cliente extends Persona {
  private autores: string[];
  private generos: string[];
  private descuento: number;

  public constructor(pAutores: string[], pGeneros: string[], pDescuento: number, pNombre: string, pApellido: string, pDni: number, pDireccion: string) {
    super(pNombre, pApellido, pDni, pDireccion);
    this.autores = pAutores;
    this.generos = pGeneros;
    this.descuento = pDescuento;
  }

  public getAutores(): string[] {
    return this.autores;
  }

  public setAutores(pAutores: string[]): void {
    this.autores = pAutores;
  }

  public getGeneros(): string[] {
    return this.generos;
  }

  public setGeneros(pGeneros: string[]): void {
    this.generos = pGeneros;
  }

  public getDescuentos(): number {
    return this.descuento;
  }

  public setDescuentos(pDescuento: number): void {
    this.descuento = pDescuento;
  }

}