import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-shop'
  categories = [
    { name: 'Toys' },
    { name: 'Electronics' }
  ];

  constructor(private router: Router) {}

  selectCategory(category: any) {
    this.router.navigate(['/category', category.name]);
  }
}
