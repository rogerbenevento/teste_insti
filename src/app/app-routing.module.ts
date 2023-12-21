import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasComponent } from './components/despesas/despesas.component';
import { DespesaFormComponent } from './components/despesa-form/despesa-form.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'despesas' },
  { path: 'despesas', component: DespesasComponent },
  { path: 'despesas/nova', component: DespesaFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
