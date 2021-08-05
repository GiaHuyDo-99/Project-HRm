import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkdaysPageComponent } from './workdays-page.component';

const routes: Routes = [
    {
        path: '',
        component: WorkdaysPageComponent,
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WorkdaysRoutingModule { }
