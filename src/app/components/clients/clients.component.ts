import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Client } from 'src/app/interfaces/client';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ToastrService } from 'ngx-toastr';
import { ClientSettingsComponent } from '../client-settings/client-settings.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{

  clients:Client[] = []
  specific:any = {};
  clientId:string = "";
  opinionClicked:boolean = false;
  isDelClicked:boolean = false;
  
  visibility:string = '';
  visibilityFlag:boolean = false;
  rate:number = 0;
  rateFlag:boolean = false;
  constructor(private _DataService:DataService , private _MatDialog:MatDialog,private _ToastrService:ToastrService){}
  ngOnInit(): void {
    this.getAllClients()
  }
  displayOpinion(index:number){
    this.opinionClicked = !this.opinionClicked
    this.specific = this.clients[index];
  }
  getAllClients(){
    this._DataService.getAllClients().subscribe({
      next:(data:Client[])=>{
        console.log(data);
        this.clients = data
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  toggleIsDelClicked(){
    this.isDelClicked = !this.isDelClicked
  }
  deleteClient(){
    this._DataService.deleteClient(this.clientId).subscribe({
      next:data=>{
        console.log(data);
        this._ToastrService.success(data.message,"SUCCESS");
        this.toggleIsDelClicked();
        this.getAllClients();
      },
      error:err=>{
        console.log(err);
        this._ToastrService.error("Something went Wrong","ERROR")
      this.toggleIsDelClicked();
        
      }
    })
  }
  passId(id:string){
    this.clientId = id;
    this.toggleIsDelClicked();
  }
  updateClient(data:Client){
    const dialogRef = this._MatDialog.open(ClientSettingsComponent,{
      maxWidth: '70vw',
      minHeight:'200px',
      hasBackdrop: true,
      disableClose: false,
      data:data,
      backdropClass: 'custom-backdrop-class',
      panelClass: 'custom-dialog-class',
      autoFocus: true,
      restoreFocus: true,
      closeOnNavigation: true,
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.getAllClients()
        dialogRef.close();
      }
      console.log("Dialog is closed");
      
    })
  }
  clearSearch(){
    this.visibility = "";
    this.rate = 0;
    this.resetFilter();
  }
  resetFilter(){
    this.visibilityFlag = false;
    this.rateFlag = false;
  }
  toggleFilter(selectedFilter: string): void {
    this.resetFilter();
    (this as any)[selectedFilter] = !(this as any)[selectedFilter]
  }
  stop(event:any){
    event.stopPropagation();
  }
}
