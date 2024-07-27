import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HomeService } from './services/home.service';
import { NgClass } from '@angular/common';
import { ConfiguracaoModel } from '../configuracao/models/configuracao.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, FormsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    RouterLink, 
    NgClass,
    RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  itemConfigSelect: number | null = null;
  listConfiguracao!: Array<ConfiguracaoModel>;
  isDisabled = true;
  sidenavOpen = false;
  menuSetupWebActive = false;
  menuSetupEmailActive = false;
  menuSetupSmsActive = false;

  constructor(private homeService: HomeService){}

  ngOnInit(){
    this.homeService.GetAll().subscribe(
      (data: Array<ConfiguracaoModel>) => {
        this.listConfiguracao = data;
      },
      error => {
        console.error('Erro ao obter configuração', error);
      }
    )
  }
  
  toggleSidenav(): void {
    this.sidenav.toggle();
    this.sidenavOpen = !this.sidenavOpen;
  }

  onSelectionChange(event: any) {
    this.itemConfigSelect = event.value;
    let configAtual = this.listConfiguracao.find(x => x.idConfiguracao == event.value)
    if(configAtual){
      this.menuSetupWebActive = configAtual.setupWeb;
      this.menuSetupEmailActive = configAtual.setupEmail;
      this.menuSetupSmsActive = configAtual.setupSMS;
    }
  }
}
