import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import {MatRadioModule} from '@angular/material/radio';

import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { UsernamesearchPipe } from 'src/app/pipes/User/usernamesearch.pipe';
import { StatusPipe } from 'src/app/pipes/User/status.pipe';
import { PhonePipe } from 'src/app/pipes/User/phone.pipe';
import { NamesearchPipe } from 'src/app/pipes/Project/namesearch.pipe';
import { CategorysearchPipe } from 'src/app/pipes/Project/categorysearch.pipe';
import { StatussearchPipe } from 'src/app/pipes/Project/statussearch.pipe';
import { StartdatesearchPipe } from 'src/app/pipes/Project/startdatesearch.pipe';
import { EnddatesearchPipe } from 'src/app/pipes/Project/enddatesearch.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    StatusPipe,
    UsernamesearchPipe,
    CategorysearchPipe,
    EnddatesearchPipe,
    StartdatesearchPipe,
    NamesearchPipe,
    StatussearchPipe
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot(),MatFormFieldModule,MatRadioModule,NgxDropzoneModule,
    MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule
  ],
  exports:[FormsModule,ReactiveFormsModule,MatFormFieldModule,NgxDropzoneModule,
    MatInputModule,MatSelectModule,MatRadioModule,UsernamesearchPipe,StatusPipe,PhonePipe,MatDatepickerModule,MatNativeDateModule,NamesearchPipe,CategorysearchPipe,StatussearchPipe,StartdatesearchPipe,EnddatesearchPipe,]
})
export class SharedModule { }
