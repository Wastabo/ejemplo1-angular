import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {

  num1='';
  num2='';
  resultado:number=0;

  

  /*num31='';
  num32='';
  num33='';
  num34='';
  num35='';
  num36='';
  num37='';
  num38='';
  num39='';
  num310='';*/

  num3:number;
  X:string[]=[];


  /*
  resultado31:number=0;
  resultado32:number=0;
  resultado33:number=0;
  resultado34:number=0;
  resultado35:number=0;
  resultado36:number=0;
  resultado37:number=0;
  resultado38:number=0;
  resultado39:number=0;
  resultado310:number=0;*/


  sumar(){
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }

  multiplicar(){
    /*this.resultado31=parseInt(this.num31)*(1);
    this.resultado32=parseInt(this.num32)*(2);
    this.resultado33=parseInt(this.num33)*(3);
    this.resultado34=parseInt(this.num34)*(4);
    this.resultado35=parseInt(this.num35)*(5);
    this.resultado36=parseInt(this.num36)*(6);
    this.resultado37=parseInt(this.num37)*(7);
    this.resultado38=parseInt(this.num38)*(8);
    this.resultado39=parseInt(this.num39)*(9);
    this.resultado310=parseInt(this.num310)*(10);*/

    for(let i =0; i<11; i++)
    {
      this.X[i]=`${this.num3} X ${i} = ${i*this.num3}`;
    }


    
    
  }

  constructor() { this.X=[];}

  ngOnInit(): void {
  }

}
