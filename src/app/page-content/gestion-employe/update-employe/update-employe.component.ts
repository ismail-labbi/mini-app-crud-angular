import { Component, OnInit,ViewChild  } from '@angular/core';
import {EmployeesJsonService} from '../../Services/employees-json.service'
import { ServiceComTableandUpdateService } from '../../Services/service-com-tableand-update.service';
import { Employe } from '../../Models/Employe';
import { FlashMessagesService } from 'angular2-flash-messages';
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
  constructor(private EmpService:EmployeesJsonService,private communic:ServiceComTableandUpdateService,private flashMessage: FlashMessagesService) { }

  ngOnInit() {

     this.emp.clone(this.communic.getemp());
     console.log(this.emp.getSalary())
     this.Nom=this.emp.GetNom();
     this.Age=this.emp.Age;
     this.email=this.emp.email;
     this.Prenom=this.emp.Prenom;
     this.Salary=this.emp.Salary;
    
  }

  modifier(){
    this.emp.setemail(this.email);
    this.emp.setAge(this.Age);
    this.emp.setNom(this.Nom);
    this.emp.setPrenom(this.Prenom);
    this.emp.setSalary(this.Salary)
    this.EmpService.Modifier(this.emp).subscribe(

      x=>{    this.flashMessage.show(' Modification réussite', { cssClass: 'alert-success', timeout: 2000 });
       }
    );
  }
 

}
