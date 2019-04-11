import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employe } from '../Models/Employe';

@Injectable({
  providedIn: 'root'
})

export class ServiceComTableandUpdateService {
  employe:Employe;
  constructor() { }

  setemp(emp:Employe){
      this.employe=emp;
  }
  getemp():Employe{
    return this.employe
  }
 



}
