import { Injectable ,OnInit } from '@angular/core';
import {Employe} from '../Models/Employe'
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService   {
  Employees :Employe[]=[];
  constructor() {
   /* let e2:Employe=new Employe("Rachid","Khadija",40,7500,"sasa@hotmail.com");
    let e3:Employe=new Employe("Aboumajad","Yassine",23,6500,"nino@hotmai.com");
    let e4:Employe=new Employe("Karim","Lamiaa",35,8500,"tkal@hotmail.com");
    let e5:Employe=new Employe("Yasani","Nissrine",30,3600,"lilo@hotmail.com");
    let e6:Employe=new Employe("Labbi","Meryem",32,11000,'silo@hotmail.com');
    let e7:Employe=new Employe("Khitous","Youssef",23,7000,"red@hotmail.com");
    let e8:Employe=new Employe("Hadougi","Hamza",27,4000,"azlo@hotmail.com");
    let e9:Employe=new Employe("Khayari","Imane",45,5500,"kilo@hotmail.com");
    let e10:Employe=new Employe("Challal","Yassmine",31,3500,"aqx@hotmail.com");
    let e11:Employe=new Employe("Oumari","Saad",29,6300,"lapo@hotmail.com");
    let e12:Employe=new Employe("Houmani","Yasser",22,3100,"sarolilo@hotmail.com");
   this.Employees.push(e1);
   this.Employees.push(e2);
   this.Employees.push(e3);
   this.Employees.push(e4);
   this.Employees.push(e5);
   this.Employees.push(e6);
   this.Employees.push(e7);
   this.Employees.push(e8);
   this.Employees.push(e9);
   this.Employees.push(e10);
   this.Employees.push(e11);
   this.Employees.push(e12);*/
    
   }



 public GetEmployees():Employe[]{
  
    return this.Employees;
    
}


public RemoveEmployee(i:number){
   this.Employees.splice(i,1);
}

public TotalEmployees():number{
   return this.Employees.length;
}

public TotalSalary():number{
  let somme:number=0;
   this.Employees.forEach(element=>{somme=element.getSalary()+somme});
   return somme;
}


public AddEmploye(employ:Employe){
  this.Employees.push(employ);
}


  }


  


