import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { ProfileComponent } from "./examples/profile/profile.component";
import { SignupComponent } from "./examples/signup/signup.component";
import { LandingComponent } from "./examples/landing/landing.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { testComponent } from "./examples/test/test.component";

const routes: Routes = [
  { path: "", redirectTo: "test", pathMatch: "full" },
  { path: "home", component: ComponentsComponent },
  { path: "user-profile", component: ProfileComponent },
  { path: "register", component: SignupComponent },
  { path: "landing", component: LandingComponent },
  { path: "nucleoicons", component: NucleoiconsComponent },
  { path: "test", component: testComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
