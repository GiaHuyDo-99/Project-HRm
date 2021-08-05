import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ForgetPasswordFormComponent } from './components/forget/forget.component';
import { LoginFormComponent } from './components/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginFormComponent,
    },
    {
        path: 'forget',
        component: ForgetPasswordFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }
