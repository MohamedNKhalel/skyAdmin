import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { FormsModule, NgModel } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@Component({
  selector: 'app-user',
  
  standalone: true,
  imports: [CommonModule,MatDialogModule,SharedModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[]
})
export class UserComponent implements OnInit {
  @HostListener('document:keydown',['$event'])
  handleKeyboardEvents(event:KeyboardEvent):void{
    if(event.key === 'Escape'){
      this.isDelClicked = false;
    }
  }
  
  isDelClicked:boolean = false;
  users:User[] = []; 
  userId:string = '';
  nameFlag:boolean = false;
  statusFlag:boolean = false;
  phoneFlag:boolean = false;
  nameSearch:string = '';
  statusSearch:string = '';
  phoneSearch:string = '';
  status:string[]= [
    "admin","user"
  ]
  constructor(private _DataService:DataService,private _AuthService:AuthService,private _ToastrService:ToastrService,private _MatDialog:MatDialog){}
  ngOnInit(): void {
    this.getUsers();
  }
  
  passId(id:string){
    this.isDelClicked = !this.isDelClicked;
    this.userId = id;
  }
  getUsers(){
    this._AuthService.getUsers().subscribe({
      next:data=>{
        this.users = data;
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }

  deleteUser(id:string){
    const user:any = this.users.find(user=> user._id == id);
    if(user.boss){
      this._ToastrService.error("cannot delete this admin");
      this.isDelClicked = false
    }
    else{
      this._AuthService.deleteUser(id).subscribe({
      next:data=>{
        this.isDelClicked = false;
        this._ToastrService.success(data.message);
        this.getUsers();
      },
      error:err=>{
        console.log(err);
        
      }
    })
    }
  }

  addUser(): void {
    this._AuthService.userState.next(false);

    const dialogRef = this._MatDialog.open(AddUserComponent, {
      width:"700px",
      minHeight:"350px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.getUsers();
      }
      this.getUsers();
      console.log('The dialog was closed');
      
    });
  }
  updateUser(data:User){
    this._AuthService.userState.next(true);
    const dialogRef = this._MatDialog.open(AddUserComponent ,{
      data:data,
      width:"700px"

    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.getUsers();
      }
      console.log('The dialog was closed');
    })
  }

  stop(event:any){
    event.stopPropagation();
  }
  toggleFilter(selectedFilter:string){
    this.resetFilter();
    (this as any)[selectedFilter] = !(this as any)[selectedFilter]
  }
  resetFilter(){
    this.nameFlag = false;
    this.phoneFlag=false;
    this.statusFlag=false;
  }
  clearSearch(){
    this.nameSearch = '';
    this.phoneSearch = '';
    this.statusSearch = '';
    this.resetFilter()
  }
}
