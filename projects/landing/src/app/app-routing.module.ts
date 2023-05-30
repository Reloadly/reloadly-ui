import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaygroundComponent } from './pages/playground/playground.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'components',
        component: PlaygroundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
