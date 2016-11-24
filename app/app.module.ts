import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { ContactoComponent } from './contacto/contacto.component';
import {ProductosService} from "./productos.service";
import {RouterModule} from "@angular/router";
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoproductosComponent,
    MenuInicialComponent,
    ContactoComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'inicio.component',component:InicioComponent},
      {path:'menu-inicial.component',component:MenuInicialComponent},
      {path:'listadoproductos.component',component:ListadoproductosComponent},
      {path:'contacto.component',component:ContactoComponent},
      {path:'',component:InicioComponent},
      {path:'**',component:PaginaNoEncontradaComponent}
    ])
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
