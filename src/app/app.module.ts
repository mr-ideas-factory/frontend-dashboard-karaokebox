import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorInterceptor} from './@core/interceptors/error.interceptor';
import {RequestInterceptor} from './@core/interceptors/request.interceptor';
import {AppCommonModule} from './@core/modules/app-common/app-common.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppCommonModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
