import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
};

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: "full"
    },
    {
        path: 'components',
        redirectTo: 'components/badge'
    },
    {
        path: 'components',
        loadChildren: () => import('./pages/playground/playground.module').then(m => m.PlaygroundModuleModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
