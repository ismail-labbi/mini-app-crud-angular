import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeesService} from './page-content/Services/employees.service'
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PageContentComponent } from './page-content/page-content.component';
import { GestionEmployeComponent } from './page-content/gestion-employe/gestion-employe.component';
import { AjouterEmployeComponent } from './page-content/gestion-employe/ajouter-employe/ajouter-employe.component';
import { FormsModule }    from '@angular/forms';
import { AgevalidatorDirective } from '../app/page-content/gestion-employe/Validators/agevalidator.directive';
import {  ReactiveFormsModule,  NG_VALIDATORS,  FormGroup,  FormControl,  ValidatorFn,  Validator  } from '@angular/forms';
import { SalaryvalidatorDirective } from './page-content/gestion-employe/Validators/salaryvalidator.directive'
import {ROUTING}from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {EmployeesJsonService} from '../app/page-content/Services/employees-json.service';
import { TableafficheComponent } from './page-content/gestion-employe/tableaffiche/tableaffiche.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { UpdateEmployeComponent } from './page-content/gestion-employe/update-employe/update-employe.component';
import { ChartsModule } from 'ng2-charts';
import { ConfirmationDialogComponent } from './page-content/gestion-employe/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './page-content/gestion-employe/confirmation-dialog/confirmation-dialog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    PageContentComponent,
    GestionEmployeComponent,
    AjouterEmployeComponent,
    AgevalidatorDirective,
    SalaryvalidatorDirective,
    ConfirmationDialogComponent,

    TableafficheComponent,
    UpdateEmployeComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    HttpClientModule,
    FlashMessagesModule .forRoot(),
    ChartsModule,
    NgbModule.forRoot()




        
  ],
  providers: [EmployeesService,EmployeesJsonService,ConfirmationDialogService ],
  entryComponents: [ ConfirmationDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
