import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo1-angular';
  nombre:String='Gustavo';
  apaterno:String='Rocha';

  CalcularDoble(x:number):number{
    return x*2;
  }
}


