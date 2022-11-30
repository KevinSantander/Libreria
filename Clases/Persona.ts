export class Persona {
  private nombre: string;
  private apellido: string;
  private dni: number;
  private direccion: string;

  public constructor(pNombre: string, pApellido: string, pDni: number, pDireccion: string) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.dni = pDni;
    this.direccion = pDireccion;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(pNombre): void {
    this.nombre = pNombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public setApellido(pApellido: string): void {
    this.apellido = pApellido;
  }

  public getDni(): number {
    return this.dni;
  }

  public setDni(pDni: number): void {
    this.dni = pDni;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public setDireccion(pDireccion: string): void {
    this.direccion = pDireccion;
  }

}