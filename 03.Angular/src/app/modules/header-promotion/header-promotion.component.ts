import { Component, OnInit } from '@angular/core';
import { ProductTopBanner } from 'src/app/interfaces/product.interface';
import { environment } from 'src/environments/environment';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css'],
})
export class HeaderPromotionComponent implements OnInit {
  baseImagePath: string = environment.assetUrl;
  topBanner: ProductTopBanner;
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((productList) => {
      const productLength = Object.keys(productList).length - 1;
      const randomIndex = Math.floor(Math.random() * productLength);
      const productId = Object.keys(productList)[randomIndex];
      const selectedProduct = productList[productId];
      this.topBanner = JSON.parse(selectedProduct.top_banner);
    });
  }
}
