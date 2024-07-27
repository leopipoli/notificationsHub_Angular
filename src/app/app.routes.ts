import { Routes } from '@angular/router';
import { ConfiguracaoComponent } from './pages/configuracao/configuracao.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'c', component: ConfiguracaoComponent },
];
  