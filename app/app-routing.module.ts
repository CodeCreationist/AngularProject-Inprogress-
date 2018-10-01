import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from "./admin/admin.component";
import { ProcessComponent } from "./process/process.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'process', component: ProcessComponent }

  ];

  
@NgModule({
    imports : [
        RouterModule.forRoot(
            appRoutes
        )  
    ],
    exports : [RouterModule]
})
export class AppRoutingModule {

}