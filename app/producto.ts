export class Producto {

  private _codigo:number;
  private _nombre:string;
  private _precio:number;
  private _descripcion:string;
  private _imgThumbnail:string;
  private _imgGrande:string;


  constructor(codigo: number, nombre: string, precio: number, descripcion: string, imgThumbnail: string, imgGrande: string) {
    this._codigo = codigo;
    this._nombre = nombre;
    this._precio = precio;
    this._descripcion = descripcion;
    this._imgThumbnail = imgThumbnail;
    this._imgGrande = imgGrande;
  }

  get codigo(): number {
    return this._codigo;
  }

  set codigo(value: number) {
    this._codigo = value;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion(value: string) {
    this._descripcion = value;
  }

  get imgGrande(): string {
    return this._imgGrande;
  }

  set imgGrande(value: string) {
    this._imgGrande = value;
  }

  get imgThumbnail(): string {
    return this._imgThumbnail;
  }

  set imgThumbnail(value: string) {
    this._imgThumbnail = value;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(value: number) {
    this._precio = value;
  }
}


