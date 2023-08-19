import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  menuUno(){
    var parametroIdEmpleado = "123456789";
    this.router.navigateByUrl(parametroIdEmpleado + "/menu-uno");
  }

  menuTres(){
    var parametroIdAsignatura = "PGY4121";
    this.router.navigateByUrl(parametroIdAsignatura + "/menu-tres");
  }

  logout(){
    this.router.navigateByUrl("login");
  }


}
