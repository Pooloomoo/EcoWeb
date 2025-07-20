import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'auth/login', 
        pathMatch: 'full'
    },
    {
        path:'auth',
        loadChildren:() => import('./feature/auth/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path:'user',
        loadChildren:() => import('./feature/user/user-routing/user-routing.module').then(m => m.UserRoutingModule)
    },
    {
        path:'admin',
        loadChildren:() => import('./feature/admin/admin-routing/admin-routing.module').then(m => m.AdminRoutingModule)
    },
    {
        path:'**',
        redirectTo:'auth/login'
    }

];
