import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ComponentsComponent } from './pages/components/components.component';
import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        //ComponentsComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        CommonModule,
        ComponentsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
