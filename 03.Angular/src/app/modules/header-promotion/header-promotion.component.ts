import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css'],
})
export class HeaderPromotionComponent implements OnInit {
  baseImagePath: string = environment.assetUrl;
  constructor() {}

  ngOnInit(): void {}
}
