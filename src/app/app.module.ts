import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-route/app-route.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RandomComponent } from './recipe/random/random.component';
import { RecipeService } from './service/recipe.service';
import { CategoriesService } from './service/categories.service';
import { HttpClientModule} from '@angular/common/http';
import { MealsDetailsComponent } from './recipe/meals-details/meals-details.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './user.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoriesComponent } from './recipe/categories/categories.component';
import { CatDetailsComponent } from './recipe/categories/cat-details/cat-details.component';
import { CatHomeComponent } from './recipe/categories/cat-home/cat-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RandomComponent,
    MealsDetailsComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    CategoriesComponent,
    CatDetailsComponent,
    CatHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RecipeService, UserService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
