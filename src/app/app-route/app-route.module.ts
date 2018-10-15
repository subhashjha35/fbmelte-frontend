import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RandomComponent } from '../recipe/random/random.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe', component: RandomComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
