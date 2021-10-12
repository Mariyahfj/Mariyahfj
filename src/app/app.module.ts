import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LotterySelcectedNumbersComponent } from './lottery-selcected-numbers/lottery-selcected-numbers.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { ActionCheckboxesComponent } from './action-checkboxes/action-checkboxes.component';
import { SideBarCitiesComponent } from './side-bar-cities/side-bar-cities.component';
import { MainLotterySeriesPageComponent } from './main-lottery-series-page/main-lottery-series-page.component';
import { UtilityService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    LotterySelcectedNumbersComponent,
    ActionButtonsComponent,
    ActionCheckboxesComponent,
    SideBarCitiesComponent,
    MainLotterySeriesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
