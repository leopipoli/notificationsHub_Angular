import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [    
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
export class HomeComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavOpen = false; // Variable to track the state of the sidenav
  
  toggleSidenav(): void {
    this.sidenav.toggle();
    this.sidenavOpen = !this.sidenavOpen; // Toggle the state
  }
}
