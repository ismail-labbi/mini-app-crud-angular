import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AjouterEmployeComponent } from './page-content/gestion-employe/ajouter-employe/ajouter-employe.component';
import { GestionEmployeComponent } from './page-content/gestion-employe/gestion-employe.component';

import { TableafficheComponent } from './page-content/gestion-employe/tableaffiche/tableaffiche.component';
import { UpdateEmployeComponent } from './page-content/gestion-employe/update-employe/update-employe.component';

export const AppRoutes: Routes = [
    { path: 'gestionemploye', component:GestionEmployeComponent  ,children :[
        {path: 'add-employee' ,component: AjouterEmployeComponent},
        {path:'table-employee', component:TableafficheComponent},
        {path: 'Update-Employe',component: UpdateEmployeComponent},

    ] }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
