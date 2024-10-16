import { Ingrediente } from "./refeicao2";

export interface Refeicao {
    nome: string;
    ingredientes: Ingrediente[]; 
    calorias: number;
    imagem?: string | ArrayBuffer | null;
 }