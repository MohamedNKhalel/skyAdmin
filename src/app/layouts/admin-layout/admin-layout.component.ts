import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';
import { UserComponent } from 'src/app/components/user/user.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

  ngOnInit(): void {
      
  }
  constructor(){}

  navState!:boolean;
  recieveState(data:boolean){
    this.navState = data;
  }
}
