import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const usuario = params.get('usuario');
      this.nombreUsuario = usuario;
    });
    
  }
}
