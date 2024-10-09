import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { RefeicaoComponent } from './refeicao/refeicao.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    RefeicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
