import { AccountService } from './../../../account/shared/account.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private accouservice: AccountService) { }
  cadastro() {
    this.router.navigate(['cadastro']);
  }
  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accouservice.login(this.login);
      console.log(`Login efetuado com sucesso: ${result}`);
      alert("Entrando na conta...");
      this.router.navigate(['']);

    } catch (error) {
      console.error(error);
      alert("Usuario não registrado");
    }
  }

}
