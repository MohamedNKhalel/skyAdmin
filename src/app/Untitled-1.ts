// //user routing (Default)
//   {path:"",canActivate:[authGuard],loadComponent:()=>import("./layouts/blanklayout/blanklayout.component").then(m=>m.BlanklayoutComponent),children:[
//     {path:"" , loadComponent:()=>import('./layouts/user-layout/user-layout.component').then(m=>m.UserLayoutComponent),children:[
//       {path:"",redirectTo:"home",pathMatch:"full"},
//       {path:"home",loadComponent:()=>import("./components/home/home.component").then(m=>m.HomeComponent),title:"Home"},
//       {path:"client",loadComponent:()=>import("./components/clients/clients.component").then(m=>m.ClientsComponent),title:"Clients"},
//       {path:"contact",loadComponent:()=>import("./components/contacts/contacts.component").then(m=>m.ContactsComponent),title:"Contacts"},
//       {path:"project",loadComponent:()=>import("./components/projects/projects.component").then(m=>m.ProjectsComponent),title:"Projects"},
//     ]},
//   ]},
  
//   //Admin routing (Admins only)
//   {path:"",canActivate:[authGuard,adminGuard] ,loadComponent:()=>import("./layouts/blanklayout/blanklayout.component").then(m=>m.BlanklayoutComponent),children:[
//     {path:"", loadComponent:()=>import('./layouts/admin-layout/admin-layout.component').then(m=>m.AdminLayoutComponent),children:[
//       {path:"",redirectTo:"home",pathMatch:"full"},
//       {path:"home",loadComponent:()=>import("./components/home/home.component").then(m=>m.HomeComponent),title:"Home"},
//       {path:"client",loadComponent:()=>import("./components/clients/clients.component").then(m=>m.ClientsComponent),title:"Clients"},
//       {path:"contact",loadComponent:()=>import("./components/contacts/contacts.component").then(m=>m.ContactsComponent),title:"Contacts"},
//       {path:"project",loadComponent:()=>import("./components/projects/projects.component").then(m=>m.ProjectsComponent),title:"Projects"},
//       {path:"users",loadComponent:()=>import("./components/user/user.component").then(m=>m.UserComponent),title:"Users"},
//       {path:"addproject",loadComponent:()=>import("./components/new-project/new-project.component").then(m=>m.NewProjectComponent),title:"Users"},
//       {path:"adduser",loadComponent:()=>import("./components/add-user/add-user.component").then(m=>m.AddUserComponent),title:"Users"},
//     ]},
//   ]},


// Abdallah el5awal
/**
 * //user routing (Default)
  {path:"",canActivate:[authGuard],loadComponent:()=>import("./layouts/blanklayout/blanklayout.component").then(m=>m.BlanklayoutComponent),children:[
    {path:"" , loadComponent:()=>import('./layouts/user-layout/user-layout.component').then(m=>m.UserLayoutComponent),children:[
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:"home",loadComponent:()=>import("./components/home/home.component").then(m=>m.HomeComponent),title:"Home"},
      {path:"client",loadComponent:()=>import("./components/clients/clients.component").then(m=>m.ClientsComponent),title:"Clients"},
      {path:"contact",loadComponent:()=>import("./components/contacts/contacts.component").then(m=>m.ContactsComponent),title:"Contacts"},
      {path:"project",loadComponent:()=>import("./components/projects/projects.component").then(m=>m.ProjectsComponent),title:"Projects"},
    ]},
  ]},
  
  //Admin routing (Admins only)
  {path:"",canActivate:[authGuard,adminGuard] ,loadComponent:()=>import("./layouts/blanklayout/blanklayout.component").then(m=>m.BlanklayoutComponent),children:[
    {path:"", loadComponent:()=>import('./layouts/admin-layout/admin-layout.component').then(m=>m.AdminLayoutComponent),children:[
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:"home",loadComponent:()=>import("./components/home/home.component").then(m=>m.HomeComponent),title:"Home"},
      {path:"client",loadComponent:()=>import("./components/clients/clients.component").then(m=>m.ClientsComponent),title:"Clients"},
      {path:"contact",loadComponent:()=>import("./components/contacts/contacts.component").then(m=>m.ContactsComponent),title:"Contacts"},
      {path:"project",loadComponent:()=>import("./components/projects/projects.component").then(m=>m.ProjectsComponent),title:"Projects"},
      {path:"users",loadComponent:()=>import("./components/user/user.component").then(m=>m.UserComponent),title:"Users"},
      {path:"addproject",loadComponent:()=>import("./components/new-project/new-project.component").then(m=>m.NewProjectComponent),title:"Users"},
      {path:"adduser",loadComponent:()=>import("./components/add-user/add-user.component").then(m=>m.AddUserComponent),title:"Users"},
    ]},
  ]},
 */