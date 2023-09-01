
import { Component } from '@angular/core';
import { Menu } from '../models/menuType';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username : string = '';

  menuArr:Menu = []

  constructor(private route: ActivatedRoute, private router:Router, private animationControl: AnimationController) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const usuario = params.get('usuario');
      this.username = usuario ? usuario : '';
    });
    this.loadMenu();
  }

  ngAfterViewInit() {
    const refs = document.querySelectorAll("ion-card");

    if (refs) {
      const animation: Animation = this.animationControl.create()
      .addElement(refs)
      .duration(1000)
      .iterations(1)
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)');
      animation.play();
    }
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

  logout(){
    this.router.navigateByUrl("login");
  }
}
