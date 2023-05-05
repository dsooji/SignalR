import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiserviceService } from './apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { RouterModule,Routes } from '@angular/router';
import { LoggerModule, NGXLogger, NgxLoggerLevel } from 'ngx-logger';
// import  {MatIcon, MatIconModule} from '@angular/material/icon'
// import { MatToolbar } from '@angular/material/toolbar';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterPageComponent } from './master-page/master-page.component';
import { HomeComponent } from './home/home.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { EmailComponent } from './email/email.component';
import { PopupComponent } from './popup/popup.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes:Routes=[
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MasterPageComponent,
    HomeComponent,
    EmailComponent,
    PopupComponent,
    NavbarComponent,


   
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
   
    RouterModule.forRoot(appRoutes),
    LoggerModule.forRoot({
      serverLoggingUrl: 'https://localhost:7201/', // Replace with YOUR API
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.Error,
      disableConsoleLogging: false
    }),

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})

// export class LogService {
//   log(msg: any) {
//       console.log(new Date() + ": " + JSON.stringify(msg));
//   }
// }
export class AppModule {
 
  constructor(private logger: NGXLogger) {
    this.logger.debug("Debug message");
    this.logger.info("Info message");
    this.logger.log("Default log message");
    this.logger.warn("Warning message");
    this.logger.error("Error message ");
  }
}
