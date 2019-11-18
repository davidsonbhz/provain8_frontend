import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../../services/cadastro.service';
import { Pessoa } from '../../model/pessoa';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public model: Pessoa; // = {};

  constructor(private service: CadastroService, private router: Router) {
    this.inicializa();
   }

  ngOnInit() {

  }

  inicializa() {
    if(this.service.getPessoa() != null) {
        this.model = this.service.getPessoa();
        //Y-m-d
        //let a = this.model.nascimento.split('/');
        //this.model.nascimento = a[2] + '-' + a[1] + '-' + a[0];
        //console.log(this.model);
    } else {
        this.model = new Pessoa();
        this.model.id = null;
    }
  }

  onSubmit() {
    this.service.salvar(this.model).subscribe(r => {
      this.service.clear();
      this.router.navigate(['lista']);
    });

  }

  excluir() {
    if(confirm('EXCLUIR REGISTRO?')) {
       this.service.excluir(this.model).subscribe(r => {
          this.service.clear();
          this.router.navigate(['lista']);
       });
    }
  }


}
