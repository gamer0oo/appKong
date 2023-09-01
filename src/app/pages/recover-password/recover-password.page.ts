import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {
  usuario:string = "";

  constructor(private router:Router, private helper:HelperService) { }

  ngOnInit() {
  }

  handleRecovery() {
    if (this.usuario == "") {
      this.helper.showAlert("Ingrese nombre de usuario", "Error");
      return;
    }
    return this.router.navigateByUrl('/');
  }
}
