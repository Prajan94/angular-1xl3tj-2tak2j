import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private route: Router) {

  }
  navigateToPost() {
    this.route.navigateByUrl("Post Trip");
  }
  navigateToSearch() {
    this.route.navigateByUrl("Search Trip");
  }
  navigateToContact() {
    this.route.navigateByUrl("Contact");
  }
}