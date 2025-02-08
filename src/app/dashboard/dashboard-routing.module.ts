import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../guards/admin.guard';
import { userGuard } from '../guards/user.guard';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '' , canActivate:[authGuard],component: DashboardComponent ,children:[
    {path:"user",canActivate:[authGuard],loadComponent:()=>import("./../layouts/user-layout/user-layout.component").then( m => m.UserLayoutComponent),children:[
      {path:"",redirectTo:"home",pathMatch:"full"},
        {path:"home",loadComponent:()=>import("./../components/home/home.component").then(m=>m.HomeComponent),title:"Home"},
        {path:"client",loadComponent:()=>import("./../components/clients/clients.component").then(m=>m.ClientsComponent),title:"Clients"},
        {path:"contact",loadComponent:()=>import("./../components/contacts/contacts.component").then(m=>m.ContactsComponent),title:"Contacts"},
        {path:"project",loadComponent:()=>import("./../components/projects/projects.component").then(m=>m.ProjectsComponent),title:"Projects"},
        {path:'**',redirectTo:'user',pathMatch:'full'}
        
    ]},
    {path:'admin',canActivate:[adminGuard],loadComponent:()=>import("./../layouts/admin-layout/admin-layout.component").then(m=>m.AdminLayoutComponent),children:[
        {path:"",redirectTo:"home",pathMatch:"full"},
        {path:"home",loadComponent:()=>import("./../components/home/home.component").then(m=>m.HomeComponent),title:"Home"},
        {path:"client",loadComponent:()=>import("./../components/clients/clients.component").then(m=>m.ClientsComponent),title:"Clients"},
        {path:"contact",loadComponent:()=>import("./../components/contacts/contacts.component").then(m=>m.ContactsComponent),title:"Contacts"},
        {path:"project",loadComponent:()=>import("./../components/projects/projects.component").then(m=>m.ProjectsComponent),title:"Projects"},
        {path:"users",loadComponent:()=>import("./../components/user/user.component").then(m=>m.UserComponent),title:"Users"},
        {path:"addproject",loadComponent:()=>import("./../components/new-project/new-project.component").then(m=>m.NewProjectComponent),title:"Users"},
        {path:"adduser",loadComponent:()=>import("./../components/add-user/add-user.component").then(m=>m.AddUserComponent),title:"Users"},
        {path:'**',redirectTo:'admin',pathMatch:'full'}
    ]},
    {path:'**',loadComponent:()=>import("./../components/notfound/notfound.component").then(m=>m.NotfoundComponent)}

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
