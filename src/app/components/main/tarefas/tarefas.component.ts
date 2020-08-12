import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  data = {
    username: ''
  }

  constructor(private router: Router, private account: AccountService) { }

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
      const result = await this.account.getUsers(this.data);
      const title = document.querySelector("#title");
      // const conta = JSON.parse({result});
      console.log(result[0].username);
      console.log(result);
      title.innerHTML = `Seja bem-vindo, ${result[1].username}`
      
      return true;

    } catch (error) {
      // alert("usuário não cadastrado")
      console.error(error);
    }    
  }
}