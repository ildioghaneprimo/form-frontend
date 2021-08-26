import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGenitoreComponent } from './form-genitore/form-genitore.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { PermissionGuard } from './permission.guard';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'genitore',
    component: FormGenitoreComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate: [PermissionGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
