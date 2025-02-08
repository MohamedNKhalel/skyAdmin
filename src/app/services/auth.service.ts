import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, Subscription, take } from 'rxjs';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { UserCreation } from '../interfaces/user-creation';
import { jwtDecode } from 'jwt-decode';
import * as CryptoJS from 'crypto-js';
import { environment } from '../Environment/environment.prod';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string = environment.baseURL;
  userState:BehaviorSubject<boolean> = new BehaviorSubject(false);
  userStatus:BehaviorSubject<string> = new BehaviorSubject('');
  userData:BehaviorSubject<any> = new BehaviorSubject(null);
  private secretKey:string = environment.secritKey;
  private roleKey:string = 'status';  
  active:BehaviorSubject<boolean> = new BehaviorSubject(true);
  private totalTime = 3600; // 1 hour in seconds
  private timerSubscription?: Subscription;
  private remainingTimeSubject = new BehaviorSubject<number>(this.totalTime);
  remainingTime$ = this.remainingTimeSubject.asObservable();

  constructor(private _HttpClient:HttpClient , private _Router:Router,private _ToastrService:ToastrService) { 
    this.resumeCountdown();
  }
  startCountdown() {
    const startTime = Date.now();
    localStorage.setItem('loginTimestamp', startTime.toString());
    localStorage.removeItem('timerExpired'); // Reset expired status

    this.resumeCountdown();
  }

  private resumeCountdown() {
    const remainingTime = this.getRemainingTime();

    // If expired, show 0 and prevent restart
    if (remainingTime === 0) {
      this.remainingTimeSubject.next(0);
      this.logOut();
      return;
    }

    this.remainingTimeSubject.next(remainingTime);

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.timerSubscription = interval(1000)
      .pipe(
        take(remainingTime),
        map(elapsed => remainingTime - elapsed - 1)
      )
      .subscribe({
        next: (time) => this.remainingTimeSubject.next(time),
        complete: () => {
          this._ToastrService.error("Your session has expired! Please log in again.");
          localStorage.setItem('timerExpired', 'true'); // Mark as expired
          localStorage.removeItem('loginTimestamp'); // Clear timestamp
          this.remainingTimeSubject.next(0); // Ensure it stays 0
        }
      });
  }

  private getRemainingTime(): number {
    if (localStorage.getItem('timerExpired') === 'true') {
      return 0; // If expired, always return 0
    }

    const savedTime = localStorage.getItem('loginTimestamp');
    if (savedTime) {
      const elapsed = Math.floor((Date.now() - Number(savedTime)) / 1000);
      return Math.max(this.totalTime - elapsed, 0);
    }
    return this.totalTime;
  }

  getUserData():any{
    if(localStorage.getItem('token') != null){
      this.userData.next(localStorage.getItem('token'));
      this.userData.next(jwtDecode(this.userData.getValue()));
      // console.log(this.userData.getValue());
      return this.userData.getValue();
    }
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('status');
    localStorage.removeItem('email');
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.remainingTimeSubject.next(this.totalTime);
    localStorage.removeItem('loginTimestamp');
    localStorage.removeItem('timerExpired'); 
    this._Router.navigate(['/login']);
  }
  saveRole(role:string):void{
    const ecryptedRole = CryptoJS.AES.encrypt(role,this.secretKey).toString();
    localStorage.setItem(this.roleKey,ecryptedRole);
  }

  getRole():string | null
  {
    const encryptedRole = localStorage.getItem('status');
    if(encryptedRole){
      try{
        const bytes = CryptoJS.AES.decrypt(encryptedRole,this.secretKey);
        return bytes.toString(CryptoJS.enc.Utf8);
      }catch(error){
        console.error('Failed to decrypt role:', error);
        return null
      }
    }
    return null
  }

  clearRole(): void {
    localStorage.removeItem(this.roleKey);
  }

  login(model:User):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}auth/login`,model)
  }

  addUser(model:UserCreation):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}auth/register`,model);
  }

  deleteUser(id:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}users/${id}`);
  }
  updateUser(id:string,model:User){
    return this._HttpClient.put(`${this.baseUrl}users/${id}`,model);

  }
  getUsers():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}users`)
  }

}
