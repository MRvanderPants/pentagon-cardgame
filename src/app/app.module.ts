import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BoardComponent } from './components/board/board.component';

import { DataService } from './services/data.service';
import { CardService } from './services/card.service';
import { Constants } from './services/constants.service';
import { Interfaces } from './services/interfaces.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    CardService,
    Constants,
    Interfaces
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
