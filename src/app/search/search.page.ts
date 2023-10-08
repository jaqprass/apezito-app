import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  constructor(private router: Router) {}

  ngOnInit() {}

  onClick(even: Event) {
    this.router.navigate(['/tabs/walkingroute']);
  }
}
