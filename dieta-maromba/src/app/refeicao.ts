export interface Refeicao {
    nome: string;
    calorias: number;
    imagem?: string | ArrayBuffer | null;
 }
 
 export interface Cafe extends Refeicao {}
 export interface Almoco extends Refeicao {}
 export interface Janta extends Refeicao {}
 export interface Lanches extends Refeicao {}
 