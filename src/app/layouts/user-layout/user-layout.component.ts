import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent {
  ngOnInit(): void {
      
  }
  constructor(){}

  navState!:boolean;
  recieveState(data:boolean){
    this.navState = data;
  }
}
