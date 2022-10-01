import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PictureGridComponent } from './picture-grid/picture-grid.component';
import { PictureDescriptionComponent } from './picture-description/picture-description.component';
import { NewPictureComponent } from './new-picture/new-picture.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'login-page', component: LoginPageComponent, data: { text: 'Login Page' } },
  { path: 'register-page', component: RegisterPageComponent, data: { text: 'Register Page' } },
  { path: 'picture-grid', component: PictureGridComponent, data: { text: 'Picture Grid' } },
  { path: 'picture-description', component: PictureDescriptionComponent, data: { text: 'Picture Description' } },
  { path: 'new-picture', component: NewPictureComponent, data: { text: 'New Picture' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
