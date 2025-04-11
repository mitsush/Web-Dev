import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  categoryName: string = '';
  categoryProducts: any[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('name') || '';
      this.categoryProducts = this.productService.getProductsByCategory(this.categoryName);
    });
  }

  removeProduct(productId: number) {
    this.productService.deleteProduct(productId);
    this.categoryProducts = this.productService.getProductsByCategory(this.categoryName);
  }

  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
