import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
  refeicoes: string[] = ['Café da manhã', 'Almoço', 'Janta', 'Lanches/Outros'];
  refeicaoSelecionada: string = this.refeicoes[0];
  novaRefeicaoNome: string = '';
  novaRefeicaoCalorias: number = 0;
  novaRefeicaoImagem: string | ArrayBuffer | null = null;

  // refeições  do dia
  cafeDaManha: any[] = [];
  almoco: any[] = [];
  janta: any[] = [];
  lanches: any[] = [];
  totalCalorias: number = 0;
  refeicoesDoDia: any[] = []; 

  adicionarRefeicao() {
    const novaRefeicao = {
      nome: this.novaRefeicaoNome,
      calorias: this.novaRefeicaoCalorias,
      imagem: this.novaRefeicaoImagem
    };

    switch (this.refeicaoSelecionada) {
      case 'Café da manhã':
        this.cafeDaManha.push(novaRefeicao);
        break;
      case 'Almoço':
        this.almoco.push(novaRefeicao);
        break;
      case 'Janta':
        this.janta.push(novaRefeicao);
        break;
      case 'Lanches/Outros':
        this.lanches.push(novaRefeicao);
        break;
    }

   
    this.refeicoesDoDia.push(novaRefeicao);

    // total de calorias
    this.totalCalorias += this.novaRefeicaoCalorias;

    
    this.novaRefeicaoNome = '';
    this.novaRefeicaoCalorias = 0;
    this.novaRefeicaoImagem = null;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.novaRefeicaoImagem = reader.result; 
    };
    reader.readAsDataURL(file);
  }
}
