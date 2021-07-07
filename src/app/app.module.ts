import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationModule } from './pagination/pagination.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
