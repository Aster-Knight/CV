import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PrevioComponent } from './components/previo/previo.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'experience', component: PrevioComponent },
// Ruta por defecto
    { path: '', redirectTo: '/about', pathMatch: 'full' },

];