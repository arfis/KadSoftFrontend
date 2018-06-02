import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CanActivateGuard} from './services/guard.service';

// Components
import {HomeComponent} from './pages/home/home.component';
import {PageNumComponent} from './pages/page-num/page-num.component';
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
import {OrderResolve} from "./pages/order/order-resolve.component";
import {OrderDetailComponent} from "./pages/order/order-detail.component";
import {StatisticsComponent} from "./pages/statistics/statistics.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {ProductListComponent} from "./component/product-list/product-list.component";
import {AdministrationModule} from './pages/administration/administration.module';
import {DocumentsComponent} from './pages/documents/documents.component';
import {OrderCreationComponent} from './pages/order/order-creation.component';

const routes: Routes = [
    // logged routes
    {
        canActivate: [CanActivateGuard],
        children: [
            {
                canActivate: [CanActivateGuard],
                loadChildren: () => AdministrationModule,
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
                path: 'invoice/:invoiceNumber',
                component: InvoiceDetailComponent,
                resolve: {
                    invoice: InvoiceResolve
                }
            },
            {
                canActivate: [CanActivateGuard],
                path: 'documents',
                component: DocumentsComponent,
            },
            {
                canActivate: [CanActivateGuard],
                path: 'order/:orderNumber',
                component: OrderDetailComponent,
                resolve: {
                    order: OrderResolve
                }
            },
            {
                canActivate: [CanActivateGuard],
                component: OrderComponent,
                path: '',
                children: [
                    {
                        canActivate: [CanActivateGuard],
                        component: OrderCreationComponent,
                        path: 'create'
                    },
                ]
            },
            {
                canActivate: [CanActivateGuard],
                component: StatisticsComponent,
                path: 'stats'
            },
            {
                canActivate: [CanActivateGuard],
                component: ProfileComponent,
                path: 'profile'
            },
            {
                canActivate: [CanActivateGuard],
                path: 'user/:userId',
                component: UserViewComponent,
                resolve: {
                    userInformation: UserResolve
                }
            },
            {
                canActivate: [CanActivateGuard],
                component: PageNumComponent,
                path: 'page/:id'
            },
            {
                canActivate: [CanActivateGuard],
                component: ProductListComponent,
                path: 'products'
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
