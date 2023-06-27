import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReloadlyUiModule } from 'projects/reloadly-ui/src/public-api';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PlaygroundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        CommonModule,
        ComponentsModule,
        ReloadlyUiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
