import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-refeicao',
  templateUrl: './refeicao.component.html',
  styleUrls: ['./refeicao.component.css']
})
export class RefeicaoComponent implements OnInit {
  tipoRefeicao: string = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tipoRefeicao = params.get('tipoRefeicao') || '';
    });
  }

  add(): void {
    this.location.back();
  }
}