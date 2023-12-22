import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasComponent } from './components/despesas/despesas.component';
import { DespesaFormComponent } from './components/despesa-form/despesa-form.component';
import { DespesaEditComponent } from './components/despesa-edit/despesa-edit.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'login' },
  { path: 'despesas', component: DespesasComponent, canActivate: [AuthGuard] },
  { path: 'despesas/nova', component: DespesaFormComponent, canActivate: [AuthGuard] },
  { path: 'despesas/editar/:id', component: DespesaEditComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
