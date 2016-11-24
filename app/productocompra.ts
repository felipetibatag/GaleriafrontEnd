export class Productocompra {
  private _codigoProducto:number;
  private _nombre:string;
  private _precio:number;



  constructor() {
  }



  get codigoProducto(): number {
    return this._codigoProducto;
  }

  set codigoProducto(value: number) {
    this._codigoProducto = value;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(value: number) {
    this._precio = value;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }
}
