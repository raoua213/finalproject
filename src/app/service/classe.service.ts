

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classee } from '../models/classee';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private url=environment.apiUrl;

  constructor(private httpclient: HttpClient) {

   }

  

  public GetAllClasses():Observable<Classee[]>{
    return this.httpclient.get<Classee[]>(`${this.url}/findAllClasses`);

  }

  public AddClasse(classe:Classee):Observable<any>{
    return this.httpclient.post(this.url+"/addClasse",classe);
  }

  public updateClasse( classe:Classee): Observable<any> {
    return this.httpclient.put(this.url+"/updateClasse", classe);
  }
   
 
  public DeleteClasse(id:number):Observable<any>{
    return this.httpclient.delete(this.url+"/deleteClasseById/"+id)
  }


  public FindClasseById(id:any):Observable<any>{
    return  this.httpclient.get<Classee>(this.url+"/findClasseById/"+id)
  }

  








}
