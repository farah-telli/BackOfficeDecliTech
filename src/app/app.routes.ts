import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ResetCodeComponent } from './auth/reset-code/reset-code.component';
import { VerifCompteComponent } from './auth/verif-compte/verif-compte.component';
import { RenetialiserCodeComponent } from './auth/renetialiser-code/renetialiser-code.component';
import { AuthGuard } from './guards/auth.guard';
import { ModuleAdminComponent } from './admin/module-admin/module-admin.component';

export const routes: Routes = [

    
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'reset', component: ResetCodeComponent },
  { path: 'verif', component: VerifCompteComponent },
  { path: 'renetialiser', component: RenetialiserCodeComponent },
    { path: 'admin', component: ModuleAdminComponent,canActivate: [AuthGuard] },

{ 
  path: 'list', 
  loadComponent: () => import('./admin/liste-instructeurs/liste-instructeurs/liste-instructeurs.component')
    .then(m => m.ListeInstructeursComponent), 
  canActivate: [AuthGuard] 
}

];
