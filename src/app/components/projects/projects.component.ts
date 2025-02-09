import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewProjectComponent } from '../new-project/new-project.component';
import { DataService } from 'src/app/services/data.service';
import { Category, Project } from 'src/app/interfaces/project';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatDialogModule, SharedModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers:[]
})
export class ProjectsComponent implements OnInit{

  Projects:Project[] = []

  isDelClicked:boolean = false;
  isImagesClicked:boolean = false;
  categories:Category[] = [];
  projectId:string = '';
  imageIndex:number = 0;
  projectStatus:string[] =[];
  projectImages:string[] = [];
  nameSearch:string = '';
  categorySearch:string = '';
  statusSearch:string = '';
  startDateSearch:string = '';
  endDateSearch:string = '';
  nameFlag:boolean = false;
  categoryFlag:boolean = false;
  statusFlag:boolean = false;
  startDateFlag:boolean = false;
  endDateFlag:boolean = false;
  constructor(private _MatDialog:MatDialog , private _DataService:DataService,private _ToastrService:ToastrService){}
  ngOnInit(): void {
      this.getAllProjects();
      this.getAllCategories();
  }


  getAllProjects(){
    this._DataService.getAllProjects().subscribe({
      next:(data:Project[])=>{
        this.Projects = data;
        this.projectStatus = data.map(project=> project.status);
        
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  getAllCategories(){
    this._DataService.getAllCategories().subscribe({
      next:(data:Category[])=>{
        this.categories = data;
        
        
      },error:err=>{
        console.log(err);
        
      }
    })
  }
  addProject(data?:Project,state:boolean = false){
    this._DataService.updateState.next(state);
  const dialogRef = this._MatDialog.open(NewProjectComponent,{
    maxWidth: '90vw',
    maxHeight: '90vh',
    hasBackdrop: true,
  disableClose: false,
    data:data,
    backdropClass: 'custom-backdrop-class',
    panelClass: 'custom-dialog-class',
    autoFocus: true,
    restoreFocus: true,
    closeOnNavigation: true,
    })
    dialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.getAllProjects();
      }
      console.log('The dialog was closed');
    })
  }
  updateProject(data:Project){
    this.addProject(data,true);
  }
  toggleDelClicked(){
    this.isDelClicked = !this.isDelClicked;
  }
  ConfirmDeleteProject(){
    if(this.projectId != ''){
      this._DataService.deleteProject(this.projectId).subscribe({
        next:data=>{
          this._ToastrService.success(data.message)
          this.getAllProjects();
          this.toggleDelClicked()
        },
        error:err=>{
          console.log(err);
          this.toggleDelClicked()
        }
      })
    }
    else{
      console.log("Error Deleting");
      
    }
  }
  openDeleteProject(id:string){
    this.toggleDelClicked()
    this.projectId = id;

  }
  displayProjectImages(data:Project){
    this.imageIndex = 0;
    this.isImagesClicked = !this.isImagesClicked;
    this.projectImages = data.images;

  }
  move(direction:string){
    if( direction== "right" ){
      if(this.imageIndex >= this.projectImages.length -1){
        this.imageIndex = 0;
      }
      else{
        this.imageIndex++;
      }
    }
    else if( direction== "left" ){
      if(this.imageIndex <= 0){
        this.imageIndex = this.projectImages.length - 1;
      }
      else{
        this.imageIndex--
      }
    }
  }
  resetFilter(){
    this.nameFlag = false;
    this.statusFlag = false;
    this.categoryFlag = false;
    this.startDateFlag = false;
    this.endDateFlag = false;
  }
  clearSearch(){
    this.nameSearch = ''
    this.statusSearch = ''
    this.categorySearch = ''
    this.startDateSearch = ''
    this.endDateSearch = ''
    this.resetFilter()
  }
  toggleFilter(selectedFilter: string): void {
    this.resetFilter();
    (this as any)[selectedFilter] = !(this as any)[selectedFilter]
  }
  stop(event:any){
    event.stopPropagation()
  }
}
