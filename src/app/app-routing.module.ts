import { AboutComponent } from './componentes/about/about.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
