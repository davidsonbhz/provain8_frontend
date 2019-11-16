import { Component, OnInit } from '@angular/core';
import { CadastroService } from './../services/cadastro.service';
import { Pessoa } from './../model/pessoa';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public model: Pessoa; // = {};

  constructor(private service: CadastroService) {
    this.inicializa();
   }

  ngOnInit() {
  }

  inicializa() {
    this.model = new Pessoa();
    this.model.id = null;
  }

  onSubmit() {
    this.service.salvar(this.model);
    this.inicializa();
  }

 

}
