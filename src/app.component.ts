import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    constructor(private router: Router) {}

    ngOnInit() {
        const isAuthenticated = !!localStorage.getItem('token');
        if (!isAuthenticated) {
            this.router.navigate(['/auth/login']);
        }
    }
}
