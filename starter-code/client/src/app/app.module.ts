import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from "./session.service";

import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'signup', component: AuthSignupComponent },
    { path: 'login', component: AuthLoginComponent },
    { path: 'private', component: MyPrivatePageComponent }
];
// For later:
/*
{ path: 'users', component: UserListComponent, canActivate: [IsAuthenticatedGuard] },
{ path: 'users/:id', component: UserComponent, canActivate: [IsAuthenticatedGuard],
  canDeactivate: [CanLeaveEditUserGuard], resolve: {
    user: UserResolverGuard
  } },
{ path: '**', redirectTo: '' }
*/
@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    MyPrivatePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
