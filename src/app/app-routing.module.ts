import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelUploadComponent } from './excel-upload/excel-upload.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"register",component:RegistrationComponent},
  {path:"search",component:SearchDeleteComponent},
  {path:"excel",component:ExcelUploadComponent},
  {path:"profile",component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
