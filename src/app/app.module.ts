import { CadastroService } from './services/cadastro.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      CadastroComponent,
      ListaComponent,
      InicioComponent,
      AboutComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      NgbModule

   ],
   providers: [
      CadastroService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
