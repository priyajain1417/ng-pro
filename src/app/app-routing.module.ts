import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceComponent } from './components/pages/maintenance/maintenance.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { AdministrationComponent } from './components/pages/administration/administration.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

const routes: Routes = [
{
	path: 'maintenance',
    component: MaintenanceComponent,
},
{
	path: 'reports',
    component: ReportsComponent,
},
{
	path: 'administration',
    component: AdministrationComponent,
},
{
	path: '',
    component: DashboardComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 

 }
