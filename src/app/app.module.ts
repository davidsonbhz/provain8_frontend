import { RodapeComponent } from './layout/rodape/rodape.component';
import { CadastroService } from './services/cadastro.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AboutComponent } from './componentes/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      CadastroComponent,
      ListaComponent,
      InicioComponent,
      AboutComponent,
      RodapeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      NgbModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatIconModule,
      NgxMaskModule.forRoot(options)

   ],
   providers: [
      CadastroService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
