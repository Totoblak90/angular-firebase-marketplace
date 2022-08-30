import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css'],
})
export class HeaderMobileComponent implements OnInit {
  baseImagePath: string = environment.assetUrl;

  constructor() {}

  ngOnInit(): void {}
}
