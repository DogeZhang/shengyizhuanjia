import { SignupPage } from './signup/signup.page';
import { SharedModule } from './../../shared/shared.module';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPage
  }
];
@NgModule({
  declarations: [
    // LoginPage,
    SignupPage
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PassportModule { }