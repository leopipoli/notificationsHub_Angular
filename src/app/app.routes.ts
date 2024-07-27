import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SetupWebComponent } from './pages/configuracao/setup-web/setup-web.component';
import { SetupEmailComponent } from './pages/configuracao/setup-email/setup-email.component';
import { SetupSmsComponent } from './pages/configuracao/setup-sms/setup-sms.component';
import { CadastroComponent } from './pages/configuracao/cadastro/cadastro.component';
import { HistoricoComponent } from './pages/notificacao/historico/historico.component';
import { EnvioManualComponent } from './pages/notificacao/envio-manual/envio-manual.component';

export const routes: Routes = [
  { path: 'Cadastro', component: CadastroComponent },
  { path: 'SetupWeb', component: SetupWebComponent },
  { path: 'SetupEmail', component: SetupEmailComponent },
  { path: 'SetupSms', component: SetupSmsComponent },
  { path: 'EnvioManual', component: EnvioManualComponent },
  { path: 'Historico', component: HistoricoComponent },
];
  