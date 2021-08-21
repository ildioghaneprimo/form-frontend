import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGenitoreComponent } from './form-genitore/form-genitore.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'genitore',
    component: FormGenitoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
