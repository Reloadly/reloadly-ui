import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsComponent } from './pages/components/components.component';
import { BadgeExampleComponent } from './components/badge-example/badge-example.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'components',
        component: BadgeExampleComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
