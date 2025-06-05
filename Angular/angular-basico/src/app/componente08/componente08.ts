import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente08',
  imports: [FormsModule],
  templateUrl: './componente08.html',
  styleUrl: './componente08.css'
})
export class Componente08 {
  nome: string = '';
}
