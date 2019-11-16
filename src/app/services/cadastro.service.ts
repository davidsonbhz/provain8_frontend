import { Pessoa } from './../model/pessoa';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/configuracoes';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }

  public obterPessoas() {
    return this.http.get<Pessoa[]>(API_CONFIG.endpoint + '/pessoas');
  }

  public salvar(p: Pessoa) {
    if (p.id !== null) {
      console.log('put', p);
      this.http.put(API_CONFIG.endpoint + '/pessoas', p).subscribe(r=> {
        this.change.emit(true);
      });
    } else {
      console.log('post', p);
      this.http.post(API_CONFIG.endpoint + '/pessoas', p).subscribe(r => {
        this.change.emit(true);
      });
    }
  }

}
