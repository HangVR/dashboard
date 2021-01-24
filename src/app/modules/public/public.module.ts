import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginPageComponent, LoginComponent],
  imports: [CommonModule, PublicRoutingModule, MatButtonModule],
})
export class PublicModule {}
