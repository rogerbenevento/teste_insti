import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoGridModule, PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DespesasComponent } from './components/despesas/despesas.component';
import { DespesaFormComponent } from './components/despesa-form/despesa-form.component';
import { InterceptorModule } from './interceptors/interceptor.module';
import { DespesaEditComponent } from './components/despesa-edit/despesa-edit.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DespesasComponent,
    DespesaFormComponent,
    DespesaEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoGridModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    FormsModule,
    ReactiveFormsModule,
    InterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
