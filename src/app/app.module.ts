import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FoodfindaAppComponent } from './foodfinda-app/foodfinda-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BestRestaurantsComponent } from './best-restaurants/best-restaurants.component';
import { QuickSearchesComponent } from './quick-searches/quick-searches.component';
import { CollectionsFoodComponent } from './collections-food/collections-food.component';
import { PlayAppStoreComponent } from './play-app-store/play-app-store.component';
import { CustomersSayComponent } from './customers-say/customers-say.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodfindaAppComponent,
    NavbarComponent,
    BestRestaurantsComponent,
    QuickSearchesComponent,
    CollectionsFoodComponent,
    PlayAppStoreComponent,
    CustomersSayComponent,
    GetInTouchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
