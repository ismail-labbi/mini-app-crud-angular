import { Component, OnInit,ViewChild  } from '@angular/core';
import {EmployeesJsonService} from '../../Services/employees-json.service'
import { ServiceComTableandUpdateService } from '../../Services/service-com-tableand-update.service';
import { Employe } from '../../Models/Employe';
@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {
  
  
 emp:Employe=new Employe();
 public Nom :string;
 private Prenom :string;
 private Age :number
 private Id :string;
 private Salary:number;
 private email:string;
  constructor(private EmpService:EmployeesJsonService,private communic:ServiceComTableandUpdateService) { }

  ngOnInit() {

     this.emp.clone(this.communic.getemp());
     console.log(this.emp.getSalary())
    
  }

  modifier(){
    this.emp.setemail(this.email);
    this.emp.setAge(this.Age);
    this.emp.setNom(this.Nom);
    this.emp.setPrenom(this.Prenom);
    this.emp.setSalary(this.Salary)
    this.EmpService.Modifier(this.emp).subscribe();
  }
 

}
