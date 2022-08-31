import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css'],
})
export class HeaderPromotionComponent implements OnInit {
  baseImagePath: string = environment.assetUrl;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      console.log(res['-M4pCGMVNNgxTXe0xo34']);
    });
  }
}
