import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PostTripComponent } from './post-trip/post-trip.component';
import { SearchTripComponent } from './search-trip/search-trip.component';

export const routes: Routes = [
  { path: "Contact", component: ContactComponent},
  { path: "Post Trip", component: PostTripComponent},
  { path: "Search Trip", component: SearchTripComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/