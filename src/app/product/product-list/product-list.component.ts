import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';


  constructor() { }

  showImage():void{
    this.muestraImg=! this.muestraImg;
  }

  ngOnInit(): void {
  }


  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":"4 Puertas Familiar",
      "Year":"Febrero 3 2020",
      "Precio":120000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "imagenURL":"https://img2.carmax.com/img/vehicles/20400704/1.jpg?width=800"
    },
    {
      "productoId":2,
      "Modelo":'Audi',
      "Descripcion":"4 Puertas Deportivo con Areo deslizadores",
      "Year":"Marzo 3 2020",
      "Precio":100000,
      "Marca":"AUDI",
      "Color":"Rojo",
      "imagenURL":"https://th.bing.com/th/id/R.69aed4759b8496f2bff4f77ce4c2c539?rik=Rs9nv5l8pDvKoQ&pid=ImgRaw&r=0"
    },
    {
      "productoId":3,
      "Modelo":'Kia Rio',
      "Descripcion":"4 Puertas familiar para transporte",
      "Year":"Marzo 3 2020",
      "Precio":170000,
      "Marca":"KIA",
      "Color":"Blanco",
      "imagenURL":"https://th.bing.com/th/id/R.4dea5433aa3315ec5a0b9821c5b2c52c?rik=fLmrmuaZvL03uQ&pid=ImgRaw&r=0"
    },
    {
      "productoId":4,
      "Modelo":'Camaro Bumbleblee',
      "Descripcion":"Transformer vivo a veces te golpea pero funciona bien :'D",
      "Year":"Julio 19 2020",
      "Precio":2000000,
      "Marca":"CHEVROLET",
      "Color":"Amarillo",
      "imagenURL":"https://th.bing.com/th/id/R.b5f69ed206c8f0e192ede5f6892c1802?rik=rfsL9LqH9fI4RQ&pid=ImgRaw&r=0"
    },

    
  ]

}
