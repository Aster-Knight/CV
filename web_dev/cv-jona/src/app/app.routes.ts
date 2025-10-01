import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience';
import { JobsListComponent } from './components/jobs-list/jobs-list';
import { StudiesListComponent } from './components/studies-list/studies-list';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },

    {
        path: 'experience',
        component: ExperienceComponent,
        children: [
            { path: 'jobs', component: JobsListComponent },
            { path: 'studies', component: StudiesListComponent },
            { path: '', redirectTo: 'jobs', pathMatch: 'full' }
        ]
    },

    { path: '', redirectTo: '/about', pathMatch: 'full' }

];