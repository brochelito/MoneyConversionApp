import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
import { MoneyEntryComponent } from './money-entry/money-entry.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResultComponent,
    MoneyEntryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    ReactiveFormsModule, 
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
