import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../Environment/environment';
import * as CryptoJS from 'crypto-js';

export const userGuard: CanActivateFn = (route, state) => {
  let role:string = '';
  let _Router = inject(Router);
  let secretKey = environment.secritKey
    const encryptedRole:string | any = localStorage.getItem('status');
    const bytes = CryptoJS.AES.decrypt(encryptedRole,secretKey);
    role = bytes.toString(CryptoJS.enc.Utf8);
    
    if(localStorage.getItem('status') != null && role.toLocaleLowerCase() === 'user'){
      return true
    }
    else{
      _Router.navigate(['/admin']);
      return false;
    }
};
