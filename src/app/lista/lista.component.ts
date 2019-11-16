import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  
  public registros: Pessoa[] = [];

  constructor(private service: CadastroService) { }

  ngOnInit() {
    this.obterPessoas();
  }


  obterPessoas() {
    this.service.obterPessoas().subscribe(r => {
      this.registros = r;
      console.log(r);
    });
  }

}
