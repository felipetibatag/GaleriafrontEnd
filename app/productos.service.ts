import { Injectable } from '@angular/core';
import {Producto} from "./producto";
import {PRODUCTOS} from "./mock-productos";
import {Productocompra} from "./productocompra";
import {Http, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ProductosService {


  constructor(private http:Http) { }
  getProductos():Producto[]{
    return PRODUCTOS;
  }

  comprarProducto(productoCompra:Productocompra){
    console.log("desde producto.service")
    console.log(productoCompra)
    console.log(JSON.stringify(productoCompra))
    let url="http://localhost:8080/producto/compra";
    let headers1=new Headers({'Content-Type':'application/json'});
    return this.http.post(url,JSON.stringify(productoCompra),{headers:headers1});
  }




}
