import { Routes } from '@angular/router';
import { SintomasComponent } from './sintomas/sintomas.component';
import { AppComponent } from './app.component';
import { TratamentoComponent } from './tratamento/tratamento.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
    {path:'home', component:AppComponent},
    {path:'', component:AppComponent},
    {path:'sintomas', component:SintomasComponent},
    {path:'tratamento', component:TratamentoComponent},
    {path:'galeria', component:GaleriaComponent},
    {path:'estatisticas', component: EstatisticasComponent},
    {path:'quiz', component:QuizComponent},

];
