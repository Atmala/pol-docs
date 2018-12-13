import {HomeComponent} from './pages/home/home.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire/questionnaire.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'questionnaire/:id',
        component: QuestionnaireComponent
    },
    {
        path: 'others',
        loadChildren: './pages/others/others.module#OthersModule',
    },
];
