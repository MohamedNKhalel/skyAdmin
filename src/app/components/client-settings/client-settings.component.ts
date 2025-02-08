import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-client-settings',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './client-settings.component.html',
  styleUrls: ['./client-settings.component.scss']
})
export class ClientSettingsComponent implements OnInit{
  
  constructor(private _DataService:DataService,private _MatDialogRef:MatDialogRef<ClientSettingsComponent>,@Inject(MAT_DIALOG_DATA) public data:Client){}
  ngOnInit(): void {
    
  }


  clientForm:FormGroup = new FormGroup({
    name: new FormControl(this.data.name||null,[Validators.required]),
    opinion: new FormControl(this.data.opinion||null,[Validators.required]),
    rate: new FormControl(this.data.rate||null,[Validators.required]),
    visible: new FormControl(JSON.stringify(this.data.visible)||null,[Validators.required]),
  })
  update(){
    this.data.name = this.clientForm.get('name')?.value
    this.data.opinion = this.clientForm.get('opinion')?.value
    this.data.rate = this.clientForm.get('rate')?.value
    this.data.visible = JSON.parse(this.clientForm.get('visible')?.value)
    
    this._DataService.updateClient(this.data,this.data._id).subscribe({
      next:data=>{
        console.log(data);
        this.cancel();
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  cancel(){
    this._MatDialogRef.close(true);
  }
}
