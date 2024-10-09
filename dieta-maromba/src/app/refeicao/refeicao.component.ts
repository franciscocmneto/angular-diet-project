import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-refeicao',
  templateUrl: './refeicao.component.html',
  styleUrl: './refeicao.component.css'
})
export class RefeicaoComponent {
  
  constructor(
    private location: Location
  ){}


add(): void{
  this.location.back();
}

}
