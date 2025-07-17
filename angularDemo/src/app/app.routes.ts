import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent as UnsignedHomeComponent} from './components/unsigned/home/home.component';
import { ExplainComponent } from './components/unsigned/explain/explain.component';
import { AboutmeComponent } from './components/unsigned/aboutme/aboutme.component';
import { ContactComponent } from './components/unsigned/contact/contact.component';
import { HomeComponent as SigedHomeComponent } from './components/signed/home/home.component'; 
import { ProfileComponent } from './components/signed/profile/profile.component';
import { ExperienceComponent } from './components/signed/experience/experience.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home/unsigned', pathMatch: 'full'},
    {path:'login', component:LoginComponent},
    {path:'home/unsigned',component:UnsignedHomeComponent},
    {path:'explain',component:ExplainComponent},
    {path:'aboutme',component:AboutmeComponent},
    {path:'contact',component:ContactComponent},
    {path:'home',component:SigedHomeComponent},
    {path:'profile',component:ProfileComponent},
    {path:'experience',component:ExperienceComponent}
];
