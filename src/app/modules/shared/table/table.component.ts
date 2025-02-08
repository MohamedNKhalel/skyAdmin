import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  nameSearch:string = '';
  statusSearch:string = '';
  categorySearch:string = '';
  startDateSearch:string = '';
  endDateSearch:string = '';
  constructor(){}

  @Input() Data:any[] = [];
  @Input() Columns:{key:string , label:string}[]= [];



}
