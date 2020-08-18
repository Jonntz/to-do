import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';
import { Account } from '../account.model';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  login = {
    id: this.conta.id,
    username: this.conta.username,
    email: this.conta.email,
    password: this.conta.password
  };

  constructor(private router: Router, private accouservice: AccountService, private conta: Account) { }
  cadastro() {
    this.router.navigate(['cadastro']);
  }
  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accouservice.login(this.login);
      console.log(this.login)
      console.log(`Login efetuado com sucesso: ${result}`);
      alert("Entrando na conta...");
      this.router.navigate(['']);

    } catch (error) {
      console.error(error);
      alert("Usuario não registrado");
    }
  }

}
