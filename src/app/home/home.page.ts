import { Component } from '@angular/core';
import { Menu } from '../models/menuType';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menuArr:Menu = []

  constructor(private router:Router, private animationControl: AnimationController) {}

  ngOnInit(){
    this.loadMenu();
  }

  loadMenu(){
    this.menuArr.push(
      {
        id:1,
        nombre: "menu1",
        url: "/menu1",
        icono: "logo-octocat",
        disabled: false
      },
      {
        id:2,
        nombre: "menu2",
        url: "/menu2",
        icono: "logo-discord",
        disabled: false
      }
    )
  }

}
