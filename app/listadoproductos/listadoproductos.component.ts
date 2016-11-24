import { Component, OnInit } from '@angular/core';
import {Producto} from "../producto";
import {ProductosService} from "../productos.service";
import {Productocompra} from "../productocompra";

@Component({
  selector: 'app-listadoproductos',
  templateUrl: './listadoproductos.component.html',
  styleUrls: ['./listadoproductos.component.css']
})
export class ListadoproductosComponent implements OnInit {

  productos:Producto[];
//  productoSeleccionado:Producto;

  private _productoCompra:Productocompra=new Productocompra();

  constructor(private productosServicio:ProductosService) {
    this.productos=productosServicio.getProductos();
  }

  ngOnInit() {
  }

  comprarProducto(producto:Producto){

    this._productoCompra.nombre=producto.nombre;
    this._productoCompra.codigoProducto=producto.codigo;
    this._productoCompra.precio=producto.precio;
    this.productosServicio.comprarProducto(this._productoCompra)
      .subscribe(
        data=>{
          this._productoCompra=new Productocompra();
        },
        error=>console.log(error)
      );









  }



}
