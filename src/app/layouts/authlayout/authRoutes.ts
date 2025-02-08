import { Route, Routes } from '@angular/router';

export default [
    {path:"",loadComponent:()=>import("./../../components/login/login.component").then(m=>m.LoginComponent),title:"Login"},

  // ERROR Route
    {path:"**",loadComponent:()=>import("./../../components/notfound/notfound.component").then(m=>m.NotfoundComponent),title:"ERROR 404!!"},

]as Route[];