import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  email:string= '';
  role:string | null = '';
  active:boolean = false;
  remainingTime$: Observable<number>;
  currentTime$: Observable<string>;
  constructor(private _AuthService:AuthService){
    this.remainingTime$ = this._AuthService.remainingTime$
    this.currentTime$ = interval(1000).pipe(
      map(() => new Date().toLocaleString()) // Get current date and time
    );
  }
  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m : ${secs}s`;
  }
  ngOnInit(): void {
    this.getUserRole();
    this.getEmail();
    this.getActiveStatus();
  }
  getActiveStatus(){
    this._AuthService.active.subscribe({
      next:data=>{
        this.active = data;
        
      }
    })
  }
  getUserRole(){
    this.role = this._AuthService.getRole();
  }
  getEmail(){
    if(localStorage.getItem('email') != null){
      this.email = localStorage.getItem('email')!;
    }
  }
}
