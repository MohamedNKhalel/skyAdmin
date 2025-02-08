import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsCoreOption } from 'echarts';
import { DataService } from 'src/app/services/data.service';
import { Project } from 'src/app/interfaces/project';
import { Client } from 'src/app/interfaces/client';
import { User } from 'src/app/interfaces/user';

echarts.use([BarChart, GridComponent,LineChart, CanvasRenderer, TitleComponent, TooltipComponent]);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgxEchartsDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[
    provideEchartsCore({ echarts }),
  ]
})
export class HomeComponent implements OnInit,OnDestroy {

  percent:string = '30%';
  projects:Project[] = [];
  users:User[] = [];
  messages:Client[] = [];
  chartOptions!: EChartsCoreOption;
  chartProjectOptions!: EChartsCoreOption;
  chartMessageOptions!: EChartsCoreOption;
  chartUserOptions!: EChartsCoreOption;
  hiddenProjects:Project[] = [];
  visibleProjects:Project[] = [];
  hiddenMessage:Client[] = [];
  visibleMessage:Client[] = [];
  adminRole:User[] = [];
  userRole:User[] = [];


  constructor(private _DataService:DataService){}
  ngOnInit(): void {
    this.getAllData();    
    
  }
  ngOnDestroy() {
    
  }
  getAllData(){
    this.getAllProjects();
    this.getAllClients();
    this.getAllUsers();
  }
  
  getAllProjects(){
    this._DataService.getAllProjects().subscribe({
      next:(data:Project[])=>{
        console.log(data);
        this.projects = data;
        this.updateChart();
        this.hiddenProjects = this.projects.filter(project => project.visible == false)
        this.visibleProjects = this.projects.filter(project => project.visible == true)
        
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  getAllClients(){
    this._DataService.getAllClients().subscribe({
      next:(data:Client[])=>{
        console.log(data);
        this.updateChart();
        this.messages = data;
        this.hiddenMessage = this.messages.filter(message => message.visible == false)
        this.visibleMessage = this.messages.filter(message => message.visible == true)
        
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  getAllUsers(){
    this._DataService.getUsers().subscribe({
    next:(data:User[])=>{
        console.log(data);
        this.users = data;
        this.updateChart();
        this.adminRole = this.users.filter(user => user.status == 'admin')
        this.userRole = this.users.filter(user => user.status == 'user')
        
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  updateChart() {
    this.chartOptions = {
      title: { text: 'Website Overview',left:'center' },
      tooltip: {},
      xAxis: { type: 'category', data: ['Projects', 'Messages', 'Users'] },
      yAxis: { type: 'value' },
      series: [{ type: 'bar', data: [this.projects.length, this.messages.length, this.users.length] }]
    };
    this.updateProjectChart()
    this.updateMessagesChart();
    this.updateUsersChart();
  }
  updateMessagesChart() {
    // Extract project names and their creation dates
    const senderName = this.messages.map(message => message.name);
    const messageCreatedDates = this.messages.map(message => message.createdAt); // Use 'createdAt' for Y-axis data
    
    // Convert the creation date to a readable format (if needed)
    const formattedDates = messageCreatedDates.map(date => new Date(date).toLocaleDateString()); 
  
    this.chartMessageOptions = {
      title: { text: 'Messages Overview', left: 'center' },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const message = this.messages[params[0].dataIndex];
          return `${message.name}<br/>Sent At: ${new Date(message.createdAt).toLocaleDateString()}`;
        },
      },
      xAxis: {
        type: 'category',
        data: senderName,
        axisLabel: {
          rotate: 45, // Rotate labels if they don't fit
          interval: 0,
        },
      },
      yAxis: {
        type: 'category',
        data: formattedDates,
        axisLabel: {
          rotate: 45, // Rotate labels for better readability
        },
      },
      series: [
        {
          type: 'bar',
          data: formattedDates,
          name: 'Project Created Date',
        },
      ],
    };
  }

  updateProjectChart() {
    // Extract project names and their creation dates
    const projectNames = this.projects.map(project => project.name);
    const projectCreatedDates = this.projects.map(project => project.createdAt); // Use 'createdAt' for Y-axis data
    
    // Convert the creation date to a readable format (if needed)
    const formattedDates = projectCreatedDates.map(date => new Date(date).toLocaleDateString()); 
  
    this.chartProjectOptions = {
      title: { text: 'Projects Overview', left: 'center' },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const project = this.projects[params[0].dataIndex];
          return `${project.name}<br/>Created At: ${new Date(project.createdAt).toLocaleDateString()}`;
        },
      },
      xAxis: {
        type: 'category',
        data: projectNames,
        axisLabel: {
          rotate: 45, // Rotate labels if they don't fit
          interval: 0,
        },
      },
      yAxis: {
        type: 'category',
        data: formattedDates,
        axisLabel: {
          rotate: 45, // Rotate labels for better readability
        },
      },
      series: [
        {
          type: 'bar',
          data: formattedDates,
          name: 'Project Created Date',
        },
      ],
    };
  }
  updateUsersChart() {
    // Extract project names and their creation dates
    const userNames = this.users.map(user => user.name);
    const userStatus = this.users.map(user => user.status); // Use 'createdAt' for Y-axis data
    
    // Convert the creation date to a readable format (if needed)
  
    this.chartUserOptions = {
      title: { text: 'Users Overview', left: 'center' },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const user = this.users[params[0].dataIndex];
          return `${user.name}<br/>Role : ${user.status}`;
        },
      },
      xAxis: {
        type: 'category',
        data: userNames,
        axisLabel: {
          rotate: 45, // Rotate labels if they don't fit
          interval: 0,
        },
      },
      yAxis: {
        type: 'category',
        data: userStatus,
        axisLabel: {
          rotate: 0, // Rotate labels for better readability
        },
      },
      series: [
        {
          type: 'bar',
          data: userStatus,
          name: 'Project Created Date',
        },
      ],
    };
  }
}
type DataT = {
  name: string;
  value: [string, number];
};