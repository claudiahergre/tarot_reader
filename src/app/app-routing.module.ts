import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsejoComponent } from './pages/consejo/consejo.component';

const routes: Routes = [
  { path: '', component: ConsejoComponent },
  { path: 'home', component: ConsejoComponent },
  { path: 'consejo', component: ConsejoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
