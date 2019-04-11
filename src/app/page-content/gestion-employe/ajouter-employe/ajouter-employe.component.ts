import { Component, OnInit } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { NgModule }       from '@angular/core';
import { Employe} from './../../Models/Employe';
import {EmployeesService} from './../../Services/employees.service';
import {EmployeesJsonService} from '../../Services/employees-json.service';
import {Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-ajouter-employe',
  templateUrl: './ajouter-employe.component.html',
  styleUrls: ['./ajouter-employe.component.css']
})
export class AjouterEmployeComponent implements OnInit {
   employe:Employe;
  public Nom :string;
   private Prenom :string;
   private Age :string
   private Id :string;
   private Salary:string;
   private email:string;
 
  constructor(public EmpServiceJson:EmployeesJsonService) { }

  ngOnInit() {
  
    
  }


  Mysubmit(){
    this.employe=new Employe();
    this.employe.generateId();
    this.employe.setPrenom(this.Prenom);
    this.employe.setAge(parseInt(this.Age));
    this.employe.setNom(this.Nom);
    this.employe.setemail(this.email);
    parseFloat
    this.employe.setSalary(parseFloat(this.Salary));

    this.EmpServiceJson.ajouterEmployee(this.employe).subscribe();    
  }
  

}
