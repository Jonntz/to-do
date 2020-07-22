import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCadastroComponent } from './components/main/form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './components/main/form-login/form-login.component';
import { TarefasComponent } from './components/main/tarefas/tarefas.component';


const routes: Routes = [
  { path: '', component: FormLoginComponent },
  { path: 'cadastro', component: FormCadastroComponent },
  { path: 'tarefas', component: TarefasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
