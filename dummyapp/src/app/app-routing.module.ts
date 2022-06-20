import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpetComponent } from './addpet/addpet.component';
import { EditpetComponent } from './editpet/editpet.component';
import { PetdetailsComponent } from './petdetails/petdetails.component';



const routes: Routes = [
  {path: 'addpet',component: AddpetComponent},
  {path: 'editpet',component: EditpetComponent},
  {path: 'petdetails',component: PetdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AddpetComponent,EditpetComponent,PetdetailsComponent]