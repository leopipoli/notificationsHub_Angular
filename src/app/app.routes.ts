import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SetupWebComponent } from './pages/configuracao/setup-web/setup-web.component';
import { SetupEmailComponent } from './pages/configuracao/setup-email/setup-email.component';
import { SetupSmsComponent } from './pages/configuracao/setup-sms/setup-sms.component';
import { CadastroComponent } from './pages/configuracao/cadastro/cadastro.component';
import { HistoricoComponent } from './pages/notificacao/historico/historico.component';
import { EnvioManualComponent } from './pages/notificacao/envio-manual/envio-manual.component';

export const routes: Routes = [
  { path: 'Cadastro/:idConfiguracao', component: CadastroComponent },
  { path: 'SetupWeb/:idConfiguracao', component: SetupWebComponent },
  { path: 'SetupEmail/:idConfiguracao', component: SetupEmailComponent },
  { path: 'SetupSms/:idConfiguracao', component: SetupSmsComponent },
  { path: 'EnvioManual/:idConfiguracao', component: EnvioManualComponent },
  { path: 'Historico/:idConfiguracao', component: HistoricoComponent },
];
  