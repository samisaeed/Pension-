import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import {AuthGuard} from './shared/gauards/auth.guard';
import {TokenInterceptorService} from './shared/interceptors/token-interceptor.service';
import {AuthService} from './main/authentication/services/auth/auth.service';

const appRoutes: Routes = [
    {
        path: '', loadChildren: () => import('./main/dashboard/dashboard.module')
            .then(m => m.DashboardModule), canActivate: [AuthGuard], data: { title: 'Dashboard' }
    },
    {
        path: 'auth', loadChildren: () => import('./main/authentication/authentication.module')
            .then(m => m.AuthenticationModule), data: { title: 'Auth' }
    },
    {
        path: 'dashboard', loadChildren: () => import('./main/dashboard/dashboard.module')
            .then(m => m.DashboardModule), canActivate: [AuthGuard], data: { title: 'Dashboard' }
    },
    {
        path: 'setup', loadChildren: () => import('./main/setup/setup.module')
            .then(m => m.SetupModule), canActivate: [AuthGuard], data: { title: 'Setup' }
    },
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
        AuthGuard
    ]
})
export class AppModule
{
}
