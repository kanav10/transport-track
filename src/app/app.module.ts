import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { appRoutes } from '../routes';


import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';
import {ActivityService } from '../services/activity.service';
import { MapService } from '../services/map.service';
import { LoginComponent } from './login/login.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { MapBoxComponent } from './map-box/map-box.component';
import {ChatmapService} from '../services/chatmap.service';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent,
    ActivityListComponent,
    MapComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
  ],
  providers: [ChatmapService, MapBoxComponent, ActivityService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
