import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading:boolean = false;
  errMsg:string = "";
  constructor(private _AuthService:AuthService , private _Router:Router){}
  ngOnInit(): void {

  }

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })
  onLoginSuccess(){
    this._AuthService.startCountdown();
  }
  login(){
    if(this.loginForm.valid && !this.isLoading){
      this.isLoading = true
      const model:any = {
        email:this.loginForm.get('email')?.value,
        password:this.loginForm.get('password')?.value
      }
      
      this._AuthService.login(model).subscribe({
        next:data=>{
          this.isLoading = false;
          this.errMsg = '';
          localStorage.setItem('token',data.token);
          let userData = this._AuthService.getUserData();
          localStorage.setItem('email' , userData.email);
          this._AuthService.active.next(true);
          this._AuthService.saveRole(userData.status);
          this._Router.navigate(['/',userData.status.toLowerCase()]);
          this.onLoginSuccess();
        },
        error:err=>{
          console.log(err);
          this.isLoading = false;
          this.errMsg = err.error.message;
        }
      })
    }
  }
}
