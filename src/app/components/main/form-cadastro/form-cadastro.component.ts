import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {
  account = {
    username: '',
    sexo: '',
    nascimento: '',
    email: '',
    password: '',
    confirmar: '',
  }

  constructor(private router: Router, private accountService: AccountService) { }

  voltar() {
    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.account);
      // alert("Entrando na contra...");
      console.log(result);
      alert("Conta criada com sucesso");

      this.router.navigate(['/login']);

    } catch (error) {
      // alert("usuário não cadastrado")
      console.error(error);
    }
  }

}
