import { Component, OnInit } from '@angular/core';
import { Employe } from '../../Models/Employe';
import { EmployeesService } from '../../Services/employees.service';
import {EmployeesJsonService} from '../../Services/employees-json.service'
import {ServiceComTableandUpdateService} from './../../Services/service-com-tableand-update.service';
import { Router } from '@angular/router';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
@Component({
  selector: 'app-tableaffiche',
  templateUrl: './tableaffiche.component.html',
  styleUrls: ['./tableaffiche.component.css']
})
export class TableafficheComponent implements OnInit {
  Employees:Employe[]=[];
  TotalEmployees:number;
  TotalSalary:number;
 

  constructor(private EmpService:EmployeesService, private route:Router,private EmployeesJsonService:EmployeesJsonService, public comunic:ServiceComTableandUpdateService,private confirmationDialogService:ConfirmationDialogService) {}

  ngOnInit() {
    this.EmployeesJsonService.getEmployees(true).subscribe((val)=>{

      this.Employees=val;
      this.TotalEmployees=val.length;
    
      this.TotalSalary=this.totalSalary();
      
     });
   
      
  }
  public totalSalary():number{
    let somme:number=0;
    this.Employees.forEach(val=>{
       somme=somme+val.Salary
    });
    return somme;
  }
  public  Supprimer(id:string){

    this.EmployeesJsonService.Suppressionemploye(id).subscribe(data=>{
      this.EmployeesJsonService.getEmployees(true).subscribe((val)=>{
        this.Employees=val;
        this.TotalEmployees=val.length;
      
      });
    });
    
      
  }

  public Modifier(employee:Employe) {
  
   //this.comunic.setSubject(employee);
   this.comunic.setemp(employee)
   this.route.navigate(['/gestionemploye/Update-Employe'])
  }
  public openConfirmationDialog(id:string) {
    console.log(id);
    this.confirmationDialogService.confirm('Veuillez confirmer', 'Voulez vous vraiment supprimer ce employée ?').then(x=>{if(x==true){
      this.EmployeesJsonService.Suppressionemploye(id).subscribe(data=>{
        this.EmployeesJsonService.getEmployees(true).subscribe((val)=>{
          this.Employees=val;
          this.TotalEmployees=val.length;
          this.TotalSalary=this.totalSalary();
        
        });
      });

    }}) 
  }


  

}
