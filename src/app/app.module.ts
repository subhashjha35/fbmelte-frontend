import { BrowserModule, SafeResourceUrl } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoriesComponent } from './recipe/categories/categories.component';
import { CatDetailsComponent } from './recipe/categories/cat-details/cat-details.component';
import { CatHomeComponent } from './recipe/categories/cat-home/cat-home.component';
import { SafePipe } from './pipes/safe.pipe';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { NguCarouselModule } from '@ngu/carousel';
import { OwlModule } from 'ngx-owl-carousel';
import { IngredientsComponent } from './recipe/ingredients/ingredients.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AreaComponent } from './recipe/area/area.component';
import { AreaDetailsComponent } from './recipe/area/area-details/area-details.component';
import { UserService } from './service/user.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SommerComponent } from './shared/sommer/sommer.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { PopupComponent } from './shared/popup/popup.component';
import { BootstrapModalModule, DialogService } from 'ng6-bootstrap-modal';
import { SearchComponent } from './recipe/search/search.component';
import { NgSelectModule } from '@ng-select/ng-select';
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
    CatHomeComponent,
    SafePipe,
    UserHomeComponent,
    IngredientsComponent,
    AreaComponent,
    AreaDetailsComponent,
    SommerComponent,
    PopupComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NguCarouselModule,
    OwlModule,
    NgxPaginationModule,
    NgHttpLoaderModule.forRoot(),
    NgSelectModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BootstrapModalModule.forRoot({ container:document.body })
  ],
  providers: [RecipeService, UserService, CategoriesService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent],
})
export class AppModule { }
