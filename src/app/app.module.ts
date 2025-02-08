import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { TokenInterceptor } from './interceptors/token.interceptor';
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,BrowserAnimationsModule,NgxSpinnerModule,
    SidenavComponent,ToastrModule.forRoot(),NgxDropzoneModule
],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
