import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../Environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  updateState:BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string = environment.baseURL;
  

  // TODO Contact Enpoint
  getContacts():Observable<any>
  { 
    return this._HttpClient.get(`${this.baseUrl}contact`)
  }
  deleteContact(id:string):Observable<any>
  { 
    return this._HttpClient.delete(`${this.baseUrl}contact/${id}`);
  }
  // **TODO Contact Enpoint
  getUsers():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}users`)
  }
  // **start Project Enpoint
  addProject(model:any):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}project`,model)
  }
  deleteProject(id:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}project/${id}`)
  }
  updateProject(id:string,model:any):Observable<any>
  {
    return this._HttpClient.put(`${this.baseUrl}project/${id}`,model)
  }
  getAllProjects():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}project/all`)
  }
  getSpecificProject(id:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}project/${id}`)
  }
  getProjectByCategory(category:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}projects/${category}`)
  }
  // **End Project Enpoint


  // **start Category Enpoint
  getAllCategories():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}category`)
  }
  addNewCategory(model:any):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}category`,model);
  }
  deleteCategory(id:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}category/${id}`);
  }
  updateCategory(model:any,id:string):Observable<any>
  {
    return this._HttpClient.put(`${this.baseUrl}category/${id}`,model)
  }
  // **End Category Enpoint


  // **start client Enpoint
  getAllClients():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}client/all`)
  }
  deleteClient(id:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}client/${id}`);
  }
  updateClient(model:any,id:string):Observable<any>
  {
    return this._HttpClient.put(`${this.baseUrl}client/${id}`,model)
  }
  // **End client Enpoint




}
