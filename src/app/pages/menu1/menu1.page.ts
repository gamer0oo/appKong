import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.page.html',
  styleUrls: ['./menu1.page.scss'],
})
export class Menu1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigateByUrl("home");
  }
}
