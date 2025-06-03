import { Component } from '@angular/core';

@Component({
  selector: 'app-componente06',
  imports: [],
  templateUrl: './componente06.html',
  styleUrl: './componente06.css'
})
export class Componente06 {
  media: number = 8;

  //vetor
  nomes: string[] = ['João', 'Marcos', 'Matias', 'Livia']

  //Linguagem

  linguagem: string = 'Javascript'
}
