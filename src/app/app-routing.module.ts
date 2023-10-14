import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCnpjComponent } from './consulta-cnpj/consulta-cnpj.component'; // 

const routes: Routes = [
  { path: 'consulta-cnpj', component: ConsultaCnpjComponent },
  { path: '', redirectTo: '/consulta-cnpj', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
