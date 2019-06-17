import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './@core/interceptors/error.interceptor';
import { RequestInterceptor } from './@core/interceptors/request.interceptor';
import { AppCommonModule } from './@core/modules/app-common/app-common.module';
import { PageNotFoundComponent } from './@core/modules/app-common/components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArraySortPipe } from './@core/pipes/array-sort.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppCommonModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
