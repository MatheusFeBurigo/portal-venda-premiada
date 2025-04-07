import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule, PoNotificationModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { LoginComponent } from './user-routine/login/login.component';
import { RegisterComponent } from './user-routine/register/register.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PoStorageModule } from '@po-ui/ng-storage';
import { AuthInterceptor } from './shared/auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    FormsModule,
    HttpClientModule,
    PoNotificationModule,
    PoStorageModule.forRoot({
      name: 'appconference',
      storeName: 'mystore',
      driverOrder: ['localstorage']
    }),
  ],
  exports: [ 
    PoStorageModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
