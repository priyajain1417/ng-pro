import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partial/header/header.component';
import { FooterComponent } from './components/partial/footer/footer.component';
import { SidebarComponent } from './components/partial/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
//import { DashboardComponent } from '.components/pages/dashboard/dashboard.component';
import { MaintenanceComponent } from './components/pages/maintenance/maintenance.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { AdministrationComponent } from './components/pages/administration/administration.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    //DashboardComponent,
    MaintenanceComponent,
    ReportsComponent,
    AdministrationComponent,
    DashboardComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,MatButtonModule, MatCheckboxModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
