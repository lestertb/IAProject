import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractIAComponent } from './components/interact-ia/interact-ia.component';

const routes: Routes = [
  { path: 'interactIA', component: InteractIAComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'interactIA' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
