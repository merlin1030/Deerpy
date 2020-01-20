import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent  },
  // { path: '**', component: HomeComponent  }, para pagina error 404

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
