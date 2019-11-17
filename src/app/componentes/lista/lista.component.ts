import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { CadastroService } from '../../services/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  
  public registros: Pessoa[] = [];

  constructor(private service: CadastroService, private router: Router) { }

  ngOnInit() {
    this.obterPessoas();
  }


  obterPessoas() {
    this.service.obterPessoas().subscribe(r => {
      this.registros = r;
      console.log(r);
    });
  }

  editar_registro(pessoa) {
    this.service.editar(pessoa);
    this.router.navigate(['cadastro']);
  }

}
