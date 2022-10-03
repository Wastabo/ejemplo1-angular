import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis1',
  templateUrl: './cinepolis1.component.html',
  styleUrls: ['./cinepolis1.component.css']
})
export class Cinepolis1Component implements OnInit {

  Nclientes:number;
  Nboletos:number;
  tarjeta:string='';
  totalApagar:number;

  MensajeBloqueo:string='';
  NombreCliente:string='';

  UniversalClientes:number=0;


  constructor() { }

  ngOnInit(): void {
  }

  cineCal():void
  {
    if(this.Nclientes>0)
    {
      this.UniversalClientes=(this.Nclientes*7);

      if(this.UniversalClientes<this.Nboletos)
      {
        this.MensajeBloqueo=(`No puedes comprar mas de 7 boletos por persona.`);
        this.Nboletos=null;
      }

      else if(this.UniversalClientes/this.Nclientes<=7)
      {
        //calcular precio sin descuento por menos de 2 boletos
        if(this.Nboletos/this.Nclientes<=2)
        {
          this.totalApagar=(this.Nboletos*12)
          this.MensajeBloqueo='';

          //validar descuento de tarjeta
          if(this.tarjeta == 'si')
          {
            this.totalApagar=this.totalApagar-(this.totalApagar*0.10);
          }
          else if(this.tarjeta == 'no')
          {
            this.totalApagar;
          }
        }

        //descuento de mas de 2 boletos pero menos de 5
        if(this.Nboletos/this.Nclientes>=3 && this.Nboletos/this.Nclientes<=5)
        {
          this.totalApagar=(this.Nboletos*12)-((this.Nboletos*12)*0.10);
          this.MensajeBloqueo='';

          //validar descuento de tarjeta
          if(this.tarjeta == 'si')
          {
            this.totalApagar=this.totalApagar-(this.totalApagar*0.10);
          }
          else if(this.tarjeta == 'no')
          {
            this.totalApagar;
          }
        }

        //descuento de mas de 5 boletos pero no mas de 7
        if(this.Nboletos/this.Nclientes>5 && this.Nboletos/this.Nclientes<=7){
          this.totalApagar=(this.Nboletos*12)-((this.Nboletos*12)*0.15);
          this.MensajeBloqueo='';

          //validar descuento de tarjeta
          if(this.tarjeta == 'si')
          {
            this.totalApagar=this.totalApagar-(this.totalApagar*0.10);
          }
          else if(this.tarjeta == 'no')
          {
            this.totalApagar;
          }
        }
      }
    }
  }

  BorrarTodo()
  {
    this.Nclientes=null;
    this.Nboletos=null;
    this.tarjeta=null;
    this.totalApagar=null;

    this.MensajeBloqueo='';
    this.NombreCliente='';
  }
}
