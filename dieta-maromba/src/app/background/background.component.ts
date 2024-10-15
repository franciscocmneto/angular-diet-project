import { Component } from '@angular/core';

interface Ingrediente {
  nome: string;
  calorias: number;
}

interface Refeicao {
  nome: string;
  ingredientes: Ingrediente[];
  imagem?: string | ArrayBuffer | null;
  calorias: number; // Soma 
}

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
})
export class BackgroundComponent {
  refeicoes = ['Café da manhã', 'Almoço', 'Janta', 'Lanche'];
  refeicaoSelecionada = 'Café da manhã';
  novaRefeicaoNome = '';
  novoIngredienteNome = '';
  novoIngredienteCalorias = 0;
  ingredientes: Ingrediente[] = [];
  totalCalorias = 0;
  imagemDaRefeicao: string | ArrayBuffer | null = null; 

 
  cafeDaManha: Refeicao[] = [];
  almoco: Refeicao[] = [];
  janta: Refeicao[] = [];
  lanches: Refeicao[] = [];
  refeicoesDoDia: Refeicao[] = [];

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => (this.imagemDaRefeicao = reader.result as string);
    reader.readAsDataURL(file);
  }

  adicionarIngrediente() {
    if (!this.novoIngredienteNome || this.novoIngredienteCalorias <= 0) {
      alert('Por favor, preencha o nome do ingrediente e as calorias.');
      return; 
    }

    const ingrediente: Ingrediente = {
      nome: this.novoIngredienteNome,
      calorias: this.novoIngredienteCalorias,
    };

    this.ingredientes.push(ingrediente);
    this.novoIngredienteNome = '';
    this.novoIngredienteCalorias = 0;
  }

  adicionarRefeicao() {
    if (!this.novaRefeicaoNome || !this.imagemDaRefeicao || this.ingredientes.length === 0) {
      alert('Por favor, preencha o nome da refeição, selecione uma imagem e adicione pelo menos um ingrediente.');
      return; 
    }

    const caloriasTotais = this.ingredientes.reduce((total, ing) => total + ing.calorias, 0);

    const novaRefeicao: Refeicao = {
      nome: this.novaRefeicaoNome,
      ingredientes: [...this.ingredientes],
      imagem: this.imagemDaRefeicao,
      calorias: caloriasTotais,
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
      case 'Lanche':
        this.lanches.push(novaRefeicao);
        break;
    }

    this.refeicoesDoDia.push(novaRefeicao);
    this.atualizarCaloriasTotais();

    this.novaRefeicaoNome = '';
    this.ingredientes = [];
    this.imagemDaRefeicao = null; 
  }

  atualizarCaloriasTotais() {
    this.totalCalorias = this.refeicoesDoDia.reduce((total, refeicao) => total + refeicao.calorias, 0);
  }

  excluirRefeicao(refeicao: Refeicao) {
    this.refeicoesDoDia = this.refeicoesDoDia.filter(r => r !== refeicao);
    this.atualizarCaloriasTotais();
  }

  excluirTodos() {
    this.cafeDaManha = [];
    this.almoco = [];
    this.janta = [];
    this.lanches = [];
    this.refeicoesDoDia = [];
    this.totalCalorias = 0;
  }
}
