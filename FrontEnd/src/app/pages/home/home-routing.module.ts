import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllowedComponent } from './allowed/allowed.component';
import { HomePageComponent } from './home-page.component';
import { LeftEarlyComponent } from './left-early/left-early.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'leftEarly',
        component: LeftEarlyComponent,
    },
    {
        path: 'not-allowed',
        component: NotAllowedComponent,
    },
    {
        path: 'allowed',
        component: AllowedComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
