import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule, PoNotificationModule } from '@po-ui/ng-components';

import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PoModule,
    PoTemplatesModule,
  ]
})
export class LoginModule { }
