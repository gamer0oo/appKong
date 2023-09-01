import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string = "";
  contrasena:string = "";

  constructor(private router:Router, private helper:HelperService) { }

  ngOnInit() {
  }

  handleLogin () {
    if (this.usuario == "") {
      this.helper.showAlert("Ingrese nombre de usuario", "Error");
      return;
    }
    if (this.contrasena == "") {
      this.helper.showAlert("Ingrese contraseña", "Error");
      return;
    }
    if (this.usuario == "PGY4121001d" && this.contrasena == "123" ) {
      return this.router.navigateByUrl('home');
    }
      return this.helper.showAlert("Usuario o contraseña incorrectos", "Error");
  }

}
