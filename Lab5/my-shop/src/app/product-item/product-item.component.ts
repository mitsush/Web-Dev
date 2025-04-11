import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  product: any = null;
  categoryName: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      this.product = this.productService.getProductById(productId);

      if (!this.product) {
        this.router.navigate(['/']);
      }
    });
  }

  likeProduct() {
    this.productService.likeProduct(this.product.id);
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id);
    this
}
shareOnWhatsApp(link: string) {
  window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
}

shareOnTelegram(link: string) {
  window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
}
}
