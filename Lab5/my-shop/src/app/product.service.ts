import { Injectable } from '@angular/core';
import { Product } from './product.model'; 

@Injectable({ providedIn: 'root' })
export class ProductService {
    private products: { [key: string]: Product[] } = {     
        "Toys":
         [
    {
      id: 1,
      name: 'Hello Kitty BRICKS',
      description: 'Mini constructor with 106 details, ideal for Valentine gift',
      price: 263,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img1.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 2,
      name: 'Winnie Pooh BRICKS',
      description: 'Mini constructor, 97 details, ideal gift for kids',
      price: 263,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img2.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 3,
      name: 'Spange Bob BRICKS',
      description: 'Mini constructor with 96 details, ideal gift for kids',
      price: 263,
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img3.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 4,
      name: 'Aliens BRICKS',
      description: 'Mini constructor with 178 details, ideal gift for kids',
      price: 263,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img4.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 5,
      name: 'Patrick Star BRICKS',
      description: 'Mini constructor with 117 details, ideal gift for kids',
      price: 263,
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img5.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 6,
      name: 'My Melody BRICKS',
      description: 'Mini constructor with 123 details, ideal for Valentine gift',
      price: 263,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img6.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 7,
      name: 'Pochacco BRICKS',
      description: 'Mini constructor with 110 details, ideal for Valentine gift',
      price: 263,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img7.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 8,
      name: 'Goofy BRICKS',
      description: 'Mini constructor with 93 details, ideal gift for kids',
      price: 263,
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img8.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 9,
      name: 'Tiger BRICKS',
      description: 'Mini constructor with 122 details, ideal gift for kids',
      price: 263,
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img9.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 10,
      name: 'Mario Bros BRICKS',
      description: 'Mini constructor with 114 details, ideal gift for kids',
      price: 263,
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img10.jpg',
      currentImageIndex: 0,
      likes: 0
    }
    ],
        "Laptops": [
          { id: 3, 
            name: "Apple MacBook", 
            price: 500000, 
            image: 'assets/images/img9.jpg', 
            likes: 0, 
            description: "Умные часы с OLED дисплеем", 
            rating: 4.8, 
            link: "/product/3", 
            currentImageIndex: 0 
        },
          { id: 4, 
            name: "Headphones", 
            price: 15000, 
            image: 'assets/images/img9.jpg', 
            likes: 0, 
            description: "Беспроводные наушники с шумоподавлением", 
            rating: 4.7, 
            link: "/product/4", 
            currentImageIndex: 0 
        }
        ]
      };

  getProductsByCategory(categoryName: string) {
    return this.products[categoryName as keyof typeof this.products] || [];
  }

  getProductById(productId: number) {
    return Object.values(this.products).flat().find(p => p.id === productId);
  }

  likeProduct(productId: number) {
    const product = this.getProductById(productId);
    if (product) product.likes++;
  }

  deleteProduct(productId: number) {
    for (let category in this.products) {
      this.products[category] = this.products[category].filter((p: Product) => p.id !== productId);
    }
  }   
}
