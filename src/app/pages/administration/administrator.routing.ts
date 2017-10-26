import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdministrationComponent} from "./administration.component";

const routes: Routes = [
    { path: '', component: AdministrationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);