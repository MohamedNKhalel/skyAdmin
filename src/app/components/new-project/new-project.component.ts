import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Category } from 'src/app/interfaces/category';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';
import { Project } from 'src/app/interfaces/project';
import { mode } from 'crypto-js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {


  isCoverSelected:boolean = false;
  msgErr:boolean =false;
  images: File[] = [];
  coverPreview:string[]|any = [];
  previews:string[] = [];
  projectCover:File[] = [];
  categories:Category[] = [];
  isLoading:boolean = false;
  updateState:boolean = false;
  updatedImages:any = [];
constructor(private _DataService:DataService, private _ToastrService:ToastrService , private _MatDialogRef:MatDialogRef<NewProjectComponent> ,@Inject(MAT_DIALOG_DATA) public data:Project ){}
  ngOnInit(): void {
      this.getAllCategories();
      this.assignUpdatestate();
      this.assignUpdateImages();
  }

  projectForm:FormGroup = new FormGroup({
    name : new FormControl(this.data?.name || null,[Validators.required,Validators.minLength(6)]),
    description : new FormControl(this.data?.description || null,[Validators.required,Validators.minLength(20)]),
    location : new FormControl(this.data?.location || null,[Validators.required]),
    startDate : new FormControl(this.data?.startDate || null,[Validators.required]),
    endDate : new FormControl(this.data?.endDate || null,[Validators.required]),
    status : new FormControl(this.data?.status || null,[Validators.required]),
    visible : new FormControl(JSON.stringify(this.data?.visible) || null,[Validators.required]),
    category : new FormControl(this.data?.category?._id || null,[Validators.required]),
    projectCover : new FormControl(this.data?.projectCover || null,[Validators.required]),
    images : new FormControl( this.data?.images || [],[Validators.required]),
  })

  toggleLoader(){
    this.isLoading = !this.isLoading;
  }
  assignUpdateImages() {
    if (this.data) {
      if (this.data.projectCover) {
        this.coverPreview = [this.data.projectCover];
        this.isCoverSelected = true; 
      }

      if (this.data.images) {
        this.previews = this.data.images; 
      }
    }
  }
  assignUpdatestate(){
    this._DataService.updateState.subscribe({
      next:data=>{
        this.updateState = data;       
  
      },
      error:err=> {
    
      },
    });
  }
  getAllCategories(){
    this._DataService.getAllCategories().subscribe({
      next:(data:Category[])=>{
        this.categories = data;
  
      },
      error:err=>{
  
        
      }
    })
  }

  
  onSelect(event:any){
      if(event.addedFiles.length == 1 && this.isCoverSelected == false){
      this.projectCover.push(event.addedFiles[0]);
      this.coverPreview = this.projectCover.map(file=>URL.createObjectURL(file));
      this.projectForm.get("projectCover")?.setValue(this.projectCover[0])
      this.isCoverSelected = true;
      this.msgErr = false
    }
    else{
      this.msgErr = true
    }
  }
  
  onRemove(file:File){
    this.projectCover.splice(this.projectCover.indexOf(file),1);
    this.coverPreview = this.projectCover.map(file=>URL.createObjectURL(file));
    this.projectForm.get("projectCover")?.setValue(this.projectCover)
    this.isCoverSelected = false;
    this.msgErr = false
  }

  onSelectMultiImages(event:any){
      const newFiles = event.addedFiles.filter((file: File) => !this.images.includes(file));
      this.images.push(...newFiles);
      this.previews = this.images.map(file=>URL.createObjectURL(file));
      this.projectForm.get("images")?.setValue(this.images)
  }
  onRemoveMultiImages(file:File,index:number){
      if(file instanceof File){
        this.images.splice(this.images.indexOf(file),1);
        
        this.previews.splice(this.images.indexOf(file),1);
        this.previews = this.images.map(file=>URL.createObjectURL(file));
        this.projectForm.get("images")?.setValue(this.images)
      }else{
        this.previews.splice(index , 1)
      }
  }
  prepareFromData() {
    let formData = new FormData();
    Object.entries(this.projectForm.value).forEach(([key, value]: any) => {
      if (key === "images" && Array.isArray(value)) {
        // Filter out non-file objects and append each file with the same key
        const imagesArr = value.filter((item: any) => item instanceof File);
        imagesArr.forEach((file: File) => {
          formData.append('images', file); // Use the same key for all files
        });
      }
      else if(key == 'visible' && value){
        formData.append(key,JSON.parse(value));
      } 
      else if (key === "projectCover" && value) {
        // Append the project cover file if it's a File object
        if (value instanceof File) {
          formData.append(key, value);
        }
      } 
      else if (value !== null && value !== undefined) {
        // Append other fields
        formData.append(key, value);
      }
    });
  
    return formData;
  }


  addProject(){
    let model = this.prepareFromData();
    if(this.projectForm.get('projectCover')?.valid && this.projectForm.get('images')?.valid  && !this.isLoading){
      this.toggleLoader()
      this._DataService.addProject(model).subscribe({
        next:data=>{
          this.toggleLoader()
          this.cancel(true);
          this._ToastrService.success("project Added Successfully",'ADDING')
          
        },error:err=>{
          this.toggleLoader()
          this.cancel(false);
          
        }
      })
    }
    else{
      alert("invalid");
    }
  }
  updateProject(){
    this.toggleLoader()
    let model = this.prepareFromData();
    this._DataService.updateProject(this.data._id,model).subscribe({
      next:data=>{
        this.toggleLoader()
        this._ToastrService.success("project Updated Successfully",'UPDATING')
        this.cancel(true);
        
      },
      error:err=>{
        this.toggleLoader()
        this.cancel(false);
        
      }
    })
  }
  cancel(state:boolean){
    this._MatDialogRef.close(state);
  }
}
