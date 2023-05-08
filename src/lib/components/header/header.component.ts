import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  openMenu: boolean = false;
  constructor(
    private location: Location,
  ) {

    this.location.onUrlChange(url => {

      // Close sidebar on url change
      this.openMenu = false;
      // Scroll to top of page
      document.getElementById('layout-container')?.scrollTo(0, 0);
    });
  }
}
