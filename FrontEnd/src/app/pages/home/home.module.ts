import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllowedComponent } from './allowed/allowed.component';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { LeftEarlyComponent } from './left-early/left-early.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import {MatIconModule} from '@angular/material/icon';
import { CreateApplicationComponent } from './create-application/create-application.component'
@NgModule({
    declarations: [
        HomePageComponent,
        LeftEarlyComponent,
        NotAllowedComponent,
        AllowedComponent,
        CreateApplicationComponent,

    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        MatTableModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatIconModule,
        FormsModule
        

    ],
})
export class HomeModule { }
