import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { userGuard } from './guards/user.guard';

const routes: Routes = [
  //user routing (Default)
  {path:"",canActivate:[authGuard],loadComponent:()=>import("./layouts/blanklayout/blanklayout.component").then(m=>m.BlanklayoutComponent),children:[
    {path:'',redirectTo:'user',pathMatch:'full'},
    {path:"admin", canActivate:[adminGuard], loadComponent:()=>import('./layouts/admin-layout/admin-layout.component').then(m=>m.AdminLayoutComponent),children:[
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:"home",loadComponent:()=>import("./components/home/home.component").then(m=>m.HomeComponent),title:"Home"},
      {path:"client",loadComponent:()=>import("./components/clients/clients.component").then(m=>m.ClientsComponent),title:"Clients"},
      {path:"contact",loadComponent:()=>import("./components/contacts/contacts.component").then(m=>m.ContactsComponent),title:"Contacts"},
      {path:"project",loadComponent:()=>import("./components/projects/projects.component").then(m=>m.ProjectsComponent),title:"Projects"},
      {path:"users",loadComponent:()=>import("./components/user/user.component").then(m=>m.UserComponent),title:"Users"},
      {path:"clientEdit",loadComponent:()=>import("./components/client-settings/client-settings.component").then(m=>m.ClientSettingsComponent),title:"Users"},
    ]},
    {path:"user", canActivate:[userGuard] , loadComponent:()=>import('./layouts/user-layout/user-layout.component').then(m=>m.UserLayoutComponent),children:[
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:"home",loadComponent:()=>import("./components/home/home.component").then(m=>m.HomeComponent),title:"Home"},
      {path:"client",loadComponent:()=>import("./components/clients/clients.component").then(m=>m.ClientsComponent),title:"Clients"},
      {path:"contact",loadComponent:()=>import("./components/contacts/contacts.component").then(m=>m.ContactsComponent),title:"Contacts"},
      {path:"project",loadComponent:()=>import("./components/projects/projects.component").then(m=>m.ProjectsComponent),title:"Projects"},
      {path:"**",loadComponent:()=>import("./components/notfound/notfound.component").then(m=>m.NotfoundComponent),title:"ERROR 404!!"}
    ]},
  ]},
  
  //Login Routes
  {path:"",loadComponent:()=>import("./layouts/authlayout/authlayout.component").then((m)=>m.AuthlayoutComponent),children:[
    {path:"login",loadComponent:()=>import("./components/login/login.component").then(m=>m.LoginComponent),title:"Login"},
  ]},

  // ERROR Route
  {path:"**",loadComponent:()=>import("./components/notfound/notfound.component").then(m=>m.NotfoundComponent),title:"ERROR 404!!"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
