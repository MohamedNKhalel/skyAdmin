import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
  role!:string | null;
  constructor(private _AuthService:AuthService){}
  ngOnInit(): void {
    this.role = this._AuthService.getRole()
  }

  @Output() navState = new EventEmitter<boolean>;
  state:boolean = true;
  
  changeLayout():void
  {
    this.navState.emit(this.state = !this.state);
  }

  logOut(){
    this._AuthService.logOut();
  }
}
