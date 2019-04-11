import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe} from '../Models/Employe';
@Injectable({
  providedIn: 'root'
})
export class EmployeesJsonService {
  Url:string="http://localhost:3000/Employees"; 
  constructor(private http:HttpClient) { }
  getEmployees(mock:boolean){
    if(mock){
      
      return this.http.get<Employe[]>(this.Url);
    }
    
  }

 ajouterEmployee(employe:Employe){
     
    return this.http.post<Employe>(this.Url,employe);

 }
 Suppressionemploye(id:string){
 return this.http.delete(this.Url+"/"+id);
 }
 Modifier(empl:Employe){
    let chemin:string=this.Url+"/"+empl.getid()
    return this.http.put(chemin,empl)
 }

}