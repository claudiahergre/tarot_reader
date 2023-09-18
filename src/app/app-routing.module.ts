import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsejoComponent } from './pages/consejo/consejo.component';
import { SiONoComponent } from './pages/si-o-no/si-o-no.component';
import { AutoestimaComponent } from './pages/autoestima/autoestima.component';

const routes: Routes = [
  { path: '', component: ConsejoComponent },
  { path: 'home', component: ConsejoComponent },
  { path: 'consejo', component: ConsejoComponent },
  { path: 'si_o_no', component: SiONoComponent },
  { path: 'autoestima', component: AutoestimaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
