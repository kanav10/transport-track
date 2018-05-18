import { Routes } from '@angular/router';
import { ActivityListComponent } from '../src/app/activity-list/activity-list.component';
import {MapComponent} from './app/map/map.component';
import { LoginComponent } from './app/login/login.component';
import { MapBoxComponent } from './app/map-box/map-box.component';
export const appRoutes: Routes = [
    {path: 'runs', component: ActivityListComponent},
    {path: 'run/:id', component: MapComponent },
    {path: 'login', component: LoginComponent},
    {path: 'chat', component: MapBoxComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}

];
