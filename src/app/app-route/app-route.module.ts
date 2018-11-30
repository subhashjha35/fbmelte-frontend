import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RandomComponent } from '../recipe/random/random.component';
import { MealsDetailsComponent } from '../recipe/meals-details/meals-details.component';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CatDetailsComponent } from '../recipe/categories/cat-details/cat-details.component';
import { UserHomeComponent } from '../user/user-home/user-home.component';
import { IngredientsComponent } from '../recipe/ingredients/ingredients.component';
import { AreaComponent } from '../recipe/area/area.component';
import { AreaDetailsComponent } from '../recipe/area/area-details/area-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cat', component: WelcomeComponent},
  { path: 'cat/:catName', component: CatDetailsComponent},
  { path: 'recipe', component: RandomComponent },
  { path: 'meal/:id', component: MealsDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'me', component: UserHomeComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'area', component: AreaComponent },
  { path: 'area/:areaName', component: AreaDetailsComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
