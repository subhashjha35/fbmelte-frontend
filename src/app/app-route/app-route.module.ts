import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RandomComponent } from '../recipe/random/random.component';
import { MealsDetailsComponent } from '../recipe/meals-details/meals-details.component';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe', component: RandomComponent },
  { path: 'meal', component: MealsDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
