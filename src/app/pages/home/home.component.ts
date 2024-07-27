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
import { ItemConfiguracao } from './models/ItemConfiguracao';
import { HomeService } from './services/home.service';

interface Food {
  value: string;
  viewValue: string;
}

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
    RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavOpen = false;
  listConfiguracao!: Array<ItemConfiguracao>;

  constructor(private homeService: HomeService){}

  ngOnInit(){
    this.homeService.GetAll().subscribe(
      (data: Array<ItemConfiguracao>) => {
        this.listConfiguracao = data;
      },
      error => {
        console.error('Erro ao obter configuração', error);
      }
    )
  }
  
  toggleSidenav(): void {
    this.sidenav.toggle();
    this.sidenavOpen = !this.sidenavOpen; // Toggle the state
  }
}
