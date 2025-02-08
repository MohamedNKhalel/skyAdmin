import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { ContactsComponent } from 'src/app/components/contacts/contacts.component';
import { ClientsComponent } from 'src/app/components/clients/clients.component';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HomeComponent,ProjectsComponent,ContactsComponent,ClientsComponent,RouterOutlet,NavComponent,SidenavComponent
  ],
  exports:[HomeComponent,ProjectsComponent,ContactsComponent,ClientsComponent,RouterOutlet,NavComponent,SidenavComponent]
})
export class SharedComponentsModule { }
