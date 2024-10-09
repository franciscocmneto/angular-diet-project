import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefeicaoComponent } from './refeicao/refeicao.component';
import { BackgroundComponent } from './background/background.component';

const routes: Routes = [
  {path: 'background', component: BackgroundComponent},
  {path: '', redirectTo: '/background', pathMatch: 'full'},
  {path: 'refeicao', component: RefeicaoComponent},
  { path: 'adicionar-refeicao/:tipoRefeicao', component: RefeicaoComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } //oi