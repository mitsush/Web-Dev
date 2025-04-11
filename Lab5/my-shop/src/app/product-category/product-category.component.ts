import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  categories = [
    { name: 'Toys',
      image: "assets/images/toys.jpeg"
    },
    { name: 'Laptops',
      image: "assets/images/laptops.wepp.webp"
     },
    { name: 'Headphones',
      image: "assets/images/headphones.jpg"
     },
    { name: 'Cameras',
      image: "assets/images/cameras.webp"
    },
    { name: 'Smt-watches', 
      image: "assets/images/smartwatches.jpg"
     }
  ];

  constructor(private router: Router) {}

  selectCategory(category: any) {
    this.router.navigate(['/category', category.name]); 
  }
}
