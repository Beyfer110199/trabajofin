import { Component } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoserviceService } from '../services/productoservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  producto: Producto = new Producto();
  listaProductos: Producto[] = [];

  constructor(private productoService: ProductoserviceService) {}

  ionViewDidEnter(){
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productoService.listarProductos().subscribe((data: any) =>{
      this.listaProductos = data;
    });
  }

  guardar() {

    this.productoService.guardarProducto(this.producto).subscribe((res: any) =>{
      this.producto = new Producto();
      this.obtenerProductos();
    });

  }



}
