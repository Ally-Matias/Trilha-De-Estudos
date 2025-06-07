import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente08',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente08.html',
  styleUrl: './componente08.css'
})
export class Componente08 {
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  //visibilidade dos botoes
  btnCadastrar: boolean = true;

  vetor: Pessoa[] = [];

  // armazenar indice
  indice: number = -1;

  cadastrar() {
    //cadastro
    this.vetor.push(this.formulario.value as Pessoa);

    //limpeza
    this.formulario.reset();

  }

  selecionar(indice: number) {
    this.indice = indice;

    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    })

    this.btnCadastrar = false;
  }

  alterar() {
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    this.formulario.reset();

    this.btnCadastrar = true;
  }

  remover() {
    this.vetor.splice(this.indice, 1);

    this.formulario.reset();
    this.btnCadastrar = true;
  }

  cancelamento() {
    this.formulario.reset();
    this.btnCadastrar = true;
  }
}
