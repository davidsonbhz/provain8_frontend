import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', './mobile.css', './tablet.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('nav', {static: false}) nav: ElementRef;
  // @ViewChild('burger', {static: false}) burger: ElementRef;
  @ViewChild('navlinks', {static: false}) navlinks: ElementRef;

  public shownav = false;

  constructor(private router: Router, private service: CadastroService) { }

  ngOnInit() {
  }

  abrir(link) {
    this.service.clear();
    this.router.navigate([link]);
  }

  showHideNav() {
    this.shownav = !this.shownav;
    this.navlinks.nativeElement.classList.toggle('nav-active');

    console.log("show hide");
  }
}
