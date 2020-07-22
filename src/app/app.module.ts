import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormLoginComponent } from './components/main/form-login/form-login.component';
import { FormCadastroComponent } from './components/main/form-cadastro/form-cadastro.component';
import { TarefasComponent } from './components/main/tarefas/tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormLoginComponent,
    FormCadastroComponent,
    TarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
