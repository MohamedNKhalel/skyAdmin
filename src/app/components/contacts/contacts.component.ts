import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { Contact } from 'src/app/interfaces/contact';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers:[]
})
export class ContactsComponent implements OnInit {
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.isClicked = false;
      this.isDelClicked = false;
    }
  }

  isEdit:boolean = false;
  contact!:Contact;
  contacts:Contact[] = [] ;
  isClicked:boolean = false;
  isDelClicked:boolean = false;
  successFlag:boolean = false;
  contactId:string ='';
  date:any = new  Date().toISOString();
  ngOnInit(): void {
      this.getContacts();
      console.log(this.date);
      
  }
  constructor(private _DataService:DataService , private _ToastrService:ToastrService){}

  openLayer(data:Contact){
    this.isClicked = !this.isClicked;
    this.contact =data;
    
  }
  getContacts(){
    this._DataService.getContacts().subscribe({
      next:data=>{
        console.log(data);
        this.contacts = data;
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  stop(evet:any){
    evet.stopPropagation();
  }
  passId(id:string){
    this.isDelClicked = !this.isDelClicked
    this.contactId = id;
  }
  deleteContact(id:string){
    this._DataService.deleteContact(id).subscribe({
      next:data=>{
        console.log(data);
        this.isDelClicked = false;
        this._ToastrService.success(data.message)
        this.getContacts();
      },
      error:err=>{
        console.log(err);
        this._ToastrService.error(err.error.message);
      }
    })
  }
}
