import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
  refeicoes: string[] = ['Café da manhã', 'Almoço', 'Janta', 'Lanches/Outros'];

  constructor() {
    
  }
}