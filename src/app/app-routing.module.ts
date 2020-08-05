import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './account/shared/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCadastroComponent } from './components/main/form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './components/main/form-login/form-login.component';
import { TarefasComponent } from './components/main/tarefas/tarefas.component';


const routes: Routes = [
  { path: '', component: TarefasComponent, pathMatch: 'full', canActivate: [AuthGuard] },

  {
    path: '', component: AuthenticationComponent, children: [
      { path: 'cadastro', component: FormCadastroComponent },
      { path: 'login', component: FormLoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
