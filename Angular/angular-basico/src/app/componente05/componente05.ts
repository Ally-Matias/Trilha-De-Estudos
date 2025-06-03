import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente05',
  imports: [CommonModule],
  templateUrl: './componente05.html',
  styleUrl: './componente05.css'
})
export class Componente05 {
  condicao: boolean = true;

  // lista de aprovados e reprovados
  lista: string[] = ['Aprovado', 'Reprovado', 'Aprovado', 'Aprovado']
}
