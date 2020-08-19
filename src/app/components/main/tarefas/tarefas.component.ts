import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';
import { Account } from '../account.model';



@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  data = {
    id: this.conta.id,
    username: this.conta.username,
    sexo: this.conta.sexo,
    nascimento: this.conta.nascimento,
    email: this.conta.email,
    password: this.conta.password,
    confirmar: this.conta.confirmar
  };

  constructor(private router: Router, private account: AccountService, private conta: Account) { }

  async sair() {
    try {
      await this.account.deslogar(this.data);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
      alert("Usuario não registrado");
    }
  } 

  ngOnInit(): void {
    this.onLoad();
  }

  async onLoad(){

    try {
      const result = await this.account.getUsersById(this.data.id);
      const title = document.querySelector("#title");
      const conta = JSON.stringify(result);
      
      const real = JSON.parse(conta);
      console.log(this.data)
      // console.log(result)
      console.log(real);

      title.innerHTML = `Seja bem-vindo, ${real}`;
      
      return true;

    } catch (error) {
      // alert("usuário não cadastrado")
      console.error(error);
    }    
  }
}