import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { ReloadlyUiModule } from 'reloadly-ui';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GettingStartedComponent,
        FooterComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReloadlyUiModule,
        FormsModule,
        AppRoutingModule,
        CommonModule,
        HighlightModule,
    ],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                fullLibraryLoader: () => import('highlight.js'),
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
