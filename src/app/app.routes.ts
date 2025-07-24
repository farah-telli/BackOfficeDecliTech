import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ResetCodeComponent } from './auth/reset-code/reset-code.component';
import { VerifCompteComponent } from './auth/verif-compte/verif-compte.component';
import { RenetialiserCodeComponent } from './auth/renetialiser-code/renetialiser-code.component';
import { AuthGuard } from './guards/auth.guard';
import { ModuleAdminComponent } from './admin/module-admin/module-admin.component';
import { CobuildspaceSAComponent } from './cobuildspace-sa/cobuildspace-sa.component';
import { ModuleSAComponent } from './module-sa/module-sa.component';
import { InstructorsSAComponent } from './instructors-sa/instructors-sa.component';
import { FeedbackSAComponent } from './feedback-sa/feedback-sa.component';

export const routes: Routes = [

    
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'reset', component: ResetCodeComponent },
  { path: 'verif', component: VerifCompteComponent },
    { path: 'superadmin/cobuilds', component: CobuildspaceSAComponent },
    { path: 'superadmin/modules', component: ModuleSAComponent },
    { path: 'superadmin/instructeurs', component: InstructorsSAComponent },
    { path: 'superadmin/avis', component: FeedbackSAComponent },

  { path: 'renetialiser', component: RenetialiserCodeComponent },
    { path: 'admin', component: ModuleAdminComponent },

{ 
  path: 'list', 
  loadComponent: () => import('./admin/liste-instructeurs/liste-instructeurs/liste-instructeurs.component')
    .then(m => m.ListeInstructeursComponent)}

];
