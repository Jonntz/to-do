import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor(private router: Router) { }

  logar() {
    this.router.navigate(['tarefas']);
  }

  cadastro() {
    this.router.navigate(['cadastro']);
  }
  ngOnInit(): void {
  }

}
