import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './shared/interceptors/api.interceptor';
import { AuthGuard } from './shared/interceptors/auth.guard';
// import { AuthModule } from './pages/auth/auth.module';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        // AuthModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        MatCardModule,
        MatButtonModule,
        HttpClientModule,
        CommonModule,
  
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: APIInterceptor,
            multi: true,
        },
        AuthGuard
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
