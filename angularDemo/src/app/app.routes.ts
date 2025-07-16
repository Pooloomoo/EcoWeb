import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/unsigned/home/home.component';
import { ExplainComponent } from './components/unsigned/explain/explain.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'login', component:LoginComponent},
    {path:'home/unsigned',component:HomeComponent},
    {path:'explain',component:ExplainComponent},
    {path:'aboutme',component:HomeComponent},
    {path:'contact',component:HomeComponent},
    {path:'profile',component:HomeComponent},
    {path:'profile',component:HomeComponent},
];
