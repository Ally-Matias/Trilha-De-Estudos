import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  imports: [],
  templateUrl: './componente03.html',
  styleUrl: './componente03.css'
})
export class Componente03 {
  imagem: string = '/dia.jpeg'

  alterarImagem() {
    if (this.imagem === '/dia.jpeg') {
      this.imagem = '/noite.jpg'
    } else {
      this.imagem = '/dia.jpeg'
    }
  }
}
