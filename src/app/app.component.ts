import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {

    constructor(
        private router: Router,
    ) {
    }

    logout() {
        this.router.navigate(['/login']);
        this.router.navigate(['/Personal']);
    }
}