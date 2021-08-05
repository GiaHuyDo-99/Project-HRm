import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LoaderComponent } from './loader/loader.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
    declarations: [
        SidebarComponent,
        LoaderComponent,
   
    ],
    imports: [
        MatListModule,
        MatIconModule,
        RouterModule,
        MatExpansionModule,
        MatButtonModule,
        CommonModule,
        MatMenuModule,
        MatSelectModule,
        FormsModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatCardModule,
        MatTableModule,
   

    ],
    exports: [
        SidebarComponent,
        LoaderComponent,
      
    ]
})
export class SharedModule { }
