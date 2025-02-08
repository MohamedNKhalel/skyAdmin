import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';
import { NavComponent } from "../../modules/components/nav/nav.component";
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@Component({
  selector: 'app-blanklayout',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SharedComponentsModule],
  templateUrl: './blanklayout.component.html',
  styleUrls: ['./blanklayout.component.scss']
})
export class BlanklayoutComponent implements OnInit{
  ngOnInit(): void {
      
  }
  constructor(){}

  navState:boolean = false;
  recieveState(data:boolean){
    this.navState = !data;
  }
}
