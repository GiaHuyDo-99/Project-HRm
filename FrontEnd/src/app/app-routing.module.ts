import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './shared/interceptors/auth.guard';

const routes: Routes = [

    {
        path: 'login',
        loadChildren: () =>
            import('./pages/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '',
        // canActivate: [AuthGuard],
        loadChildren: () =>
            import('./pages/pages.module').then((m) => m.PagesModule),
    },
    {
        path: '**',
        redirectTo: '404',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
