import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { ComponentsModule } from './components/components.module';
import { ComponentsComponent } from './pages/components/components.component';

@NgModule({
    declarations: [
        AppComponent,
        ComponentsComponent,
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
