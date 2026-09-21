import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { StudentPage } from './pages/student-page/student-page';
import { AdvisorPage } from './pages/advisor-page/advisor-page';
import { CompanyPage } from './pages/company-page/company-page';
import { LoginPage } from './pages/login-page/login-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: 'home', component: HomePage},
    {path: 'student', component: StudentPage},
    {path: 'advisor', component: AdvisorPage},
    {path: 'company', component: CompanyPage},
    {path: 'login', component: LoginPage},
];
