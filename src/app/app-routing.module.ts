import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cinepolis1Component } from './cinepolis1/cinepolis1.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path:'', component:ProductListComponent}, 
  {path:'suma', component:OperasBasComponent},
  {path:'cinepolis1', component:Cinepolis1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
