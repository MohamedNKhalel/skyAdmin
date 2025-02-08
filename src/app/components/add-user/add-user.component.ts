import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AuthService } from 'src/app/services/auth.service';
import { UserCreation } from 'src/app/interfaces/user-creation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{

  userState:boolean = false;
  password:string = "**************";
  constructor(private _MatDialogRef:MatDialogRef<AddUserComponent>,@Inject(MAT_DIALOG_DATA) public data: User,private _AuthService:AuthService,private _ToastrService:ToastrService){}
  ngOnInit(): void {
      this.userState = this._AuthService.userState.getValue();
  }

  addUserForm:FormGroup = new FormGroup({
    name: new FormControl(this.data?.name || null,[Validators.required]),
    email: new FormControl(this.data?.email || null,[Validators.required,Validators.email]),
    phone: new FormControl(this.data?.phone || null,[Validators.required,Validators.pattern(/^(01)[0125][0-9]{8}$/)]),
    password: new FormControl( null  , [Validators.required , Validators.minLength(6)]),
    status: new FormControl(this.data?.status || null,[Validators.required]),
  })

  addUser(){
    let model:UserCreation = {
      name: this.addUserForm.get('name')?.value,
      email: this.addUserForm.get('email')?.value,
      password: this.addUserForm.get('password')?.value,
      phone: this.addUserForm.get('phone')?.value,
      status: this.addUserForm.get('status')?.value,
    }
    this._AuthService.addUser(model).subscribe({
      next:data=>{
        console.log(data);
        this._ToastrService.success("Account Added Successfully");
        this.closeModal();
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  updateUser(){
    this.data.name = this.addUserForm.get('name')?.value
    this.data.email = this.addUserForm.get('email')?.value
    this.data.status = this.addUserForm.get('status')?.value
    this.data.phone = this.addUserForm.get('phone')?.value
    this._AuthService.updateUser(this.data._id,this.data).subscribe({
      next:data=>{
        console.log(data);
        this._ToastrService.success("User Update Successfully")
        this.closeModal();
      },
      error:err=>{
        console.log(err );
        
      }
    })
    console.log(this.data);
    
  }
  closeModal(){
    this._MatDialogRef.close(true);
  }
}
