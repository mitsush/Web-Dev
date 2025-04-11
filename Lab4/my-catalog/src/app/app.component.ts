import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-catalog';

  products = [
    {
      name: 'Hello Kitty BRICKS',
      description: 'Mini constructor with 106 details, ideal for Valentine gift',
      price: 263,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: ['/assets/images/img1.jpg', '/assets/images/img1.2.jpeg', '/assets/images/img1.3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Winnie Pooh BRICKS',
      description: 'Mini constuctor, 97 details, ideal gift for kids',
      price: 263,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: ['/assets/images/img2.jpg', '/assets/images/img2.2.jpg','/assets/images/img2.3.webp'],
      currentImageIndex: 0
    },
    {
      name: 'Spange Bob BRICKS',
      description: 'Mini constructor with 96 details, ideal gift for kids',
      price: 263,
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: ['/assets/images/img3.jpg', '/assets/images/img3.2.jpeg', '/assets/images/img3.3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Aliens BRICKS',
      description: 'Mini constructor with 178 details, ideal gift for kids',
      price: 263,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: ['/assets/images/img4.jpg', '/assets/images/img4.2.jpeg', '/assets/images/img4.3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Patrick Star BRICKS',
      description: 'Mini constructor with 117 details, ideal gift for kids',
      price: 263,
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: ['/assets/images/img5.jpg', '/assets/images/img5.3.jpeg', '/assets/images/img5.2.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'My Melody BRICKS',
      description: 'Mini constructor with 123 details, ideal for Valentine gift',
      price: 263,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: ['/assets/images/img6.jpg', '/assets/images/img6.3.jpeg', '/assets/images/img6.2.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Pochacco BRICKS',
      description: 'Mini constructor with 110 details, ideal for Valentine gift',
      price: 263,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: ['/assets/images/img7.jpg', '/assets/images/img7.2.jpeg', '/assets/images/img7.3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Goofy BRICKS',
      description: 'Mini constructor with 93 details, ideal gift for kids',
      price: 263,
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: ['/assets/images/img8.jpg', '/assets/images/img8.2.jpeg', '/assets/images/img8.3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Tiger BRICKS',
      description: 'Mini constructor with 122 details, ideal gift for kids',
      price: 263,
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: ['/assets/images/img9.jpg', '/assets/images/img9.2.jpeg', '/assets/images/img9.3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Mario Bros BRICKS',
      description: 'Mini constructor with 114 details, ideal gift for kids',
      price: 263,
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: ['/assets/images/img10.jpg', '/assets/images/img10.2.jpeg', '/assets/images/img10.3.jpeg'], 
      currentImageIndex: 0 
    }
  ];

  nextImage(product: any) {
    if (product.currentImageIndex < product.image.length - 1) {
      product.currentImageIndex++;
    } else {
      product.currentImageIndex = 0; 
    }
  }

  prevImage(product: any) {
    if (product.currentImageIndex > 0) {
      product.currentImageIndex--;
    } else {
      product.currentImageIndex = product.image.length - 1; 
    }
  }

  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
