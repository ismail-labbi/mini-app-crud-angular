import { Component, OnInit } from '@angular/core';
import {Employe} from '../Models/Employe';
import {EmployeesService} from '../Services/employees.service'
import {EmployeesJsonService} from '../Services/employees-json.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestion-employe',
  templateUrl: './gestion-employe.component.html',
  styleUrls: ['./gestion-employe.component.css']
})
export class GestionEmployeComponent implements OnInit {
   Employees:Employe[]=[];
   TotalEmployees:number;
   TotalSalary:number;
  
  
  constructor() {}

  ngOnInit() {}

  



}
