import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'company-registration', loadChildren: () => import('./pages/company-registration-setup/company-registration-setup.module')
            .then(m => m.CompanyRegistrationSetupModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class SetupRoutingModule { }
