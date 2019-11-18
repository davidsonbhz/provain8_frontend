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

  private pessoa: Pessoa;

  constructor(private http: HttpClient) { }

  public obterPessoas() {
    return this.http.get<Pessoa[]>(API_CONFIG.endpoint + '/pessoas');
  }

  public salvar(p: Pessoa) {
    //console.log(p);
    if (p.id !== null) {    
      return this.http.put(API_CONFIG.endpoint + '/pessoas/' + p.id, p);

    } else {
      return this.http.post(API_CONFIG.endpoint + '/pessoas', p);

    }
  }

  public excluir(p: Pessoa) {
     return this.http.delete(API_CONFIG.endpoint + '/pessoas/' + p.id);
  }

  public editar(p: Pessoa) {
    this.pessoa = p;
  }

  public getPessoa() {
    return this.pessoa;
  }

  public clear() {
    this.pessoa = null;
  }
}
