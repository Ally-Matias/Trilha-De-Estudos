import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  imports: [CommonModule],
  templateUrl: './componente04.html',
  styleUrl: './componente04.css'
})
export class Componente04 {
  // Ngif
  exibir: boolean = false;

  acao() {
    if (this.exibir === true) {
      this.exibir = false;
    } else {
      this.exibir = true;
    }
  }

  //Ngfor
  nomes: string[] = ['Aria', 'Bruna', 'Lívia', 'Carla'];
}
