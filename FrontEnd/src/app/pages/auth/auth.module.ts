import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ForgetPasswordFormComponent } from './components/forget/forget.component';
import { LoginFormComponent } from './components/login/login.component';

@NgModule({
    declarations: [LoginFormComponent, ForgetPasswordFormComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatTabsModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        MatFormFieldModule,
        MatIconModule,
        MatSlideToggleModule,
    ],
    providers: [],
})
export class AuthModule { }
