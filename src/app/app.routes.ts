import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CanActivateGuard} from './services/guard.service';

// Components
import {HomeComponent} from './pages/home/home.component';
import {PageNumComponent} from './pages/page-num/page-num.component';
import {ClientComponent} from './pages/client/client.component';
import {LayoutsAuthComponent} from './pages/layouts/auth/auth';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {InvoiceComponent} from "./pages/invoice/invoice.component";
import {UserResolve} from "./pages/users/user-view/user-resolver.component";
import {UserViewComponent} from "./pages/users/user-view/user-view.component";
import {OrderComponent} from "./pages/order/order.component";
import {InvoiceResolve} from "./pages/invoice/invoice-resolve.component";
import {InvoiceDetailComponent} from "./pages/invoice/invoice-detail.component";
import {AdministrationComponent} from "./pages/administration/administration.component";

const routes: Routes = [
    // logged routes
    {
        canActivate: [CanActivateGuard],
        children: [
            {
                canActivate: [CanActivateGuard],
                component: AdministrationComponent,
                path: 'administration'
            },
            {
                canActivate: [CanActivateGuard],
                component: HomeComponent,
                path: 'home'
            },
            {
                canActivate: [CanActivateGuard],
                component: InvoiceComponent,
                path: 'invoices'
            },
            {
                canActivate: [CanActivateGuard],
                path: 'invoice/:invoiceId',
                component: InvoiceDetailComponent,
                resolve: {
                    invoice: InvoiceResolve
                }
            },
            {
                canActivate: [CanActivateGuard],
                component: OrderComponent,
                path: 'orders'
            },
            {
                canActivate: [CanActivateGuard],
                path: 'user/:userId',
                component: UserViewComponent,
                resolve: {
                    customer: UserResolve
                }
            },
            {
                canActivate: [CanActivateGuard],
                component: PageNumComponent,
                path: 'page/:id'
            },
            {
                canActivate: [CanActivateGuard],
                component: ClientComponent,
                path: 'client'
            }
        ],
        component: LayoutsAuthComponent,
        path: '',
    },
    // not logged routes
    {
        component: LoginComponent,
        path: 'login'
    },
    {
        component: RegisterComponent,
        path: 'register'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
