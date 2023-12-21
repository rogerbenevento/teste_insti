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

@NgModule({
  declarations: [
    AppComponent,
    DespesasComponent,
    DespesaFormComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
