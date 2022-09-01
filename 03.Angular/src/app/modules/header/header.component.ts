import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriesService } from '../../services/categories.service';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { FiltersService } from '../../services/filters.service';
import {
  SubCategory,
  SubCategoryList,
} from '../../interfaces/sub-categories.interface';
import {
  CategoryResponse,
  CategoryMapped,
} from '../../interfaces/categories.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  baseImagePath: string = environment.assetUrl;
  categories: CategoryMapped[] = [];
  subCategoriesFiltered: SubCategory[] = [];
  constructor(
    private categoriesService: CategoriesService,
    private filterService: FiltersService
  ) {
    this.getCategories();
  }

  ngOnInit(): void {}

  private getCategories(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        categories.forEach((c) => {
          c.title_list.forEach((title) => {
            this.filterService
              .filter('sub-categories.json', 'title_list', title)
              .subscribe({
                next: (res: SubCategoryList) => {
                  for (let key in res) {
                    this.subCategoriesFiltered.push(res[key]);
                  }
                },
                error: (err) => console.log(err),
              });
          });
        });
      },
      error: (err) => console.log(err),
    });
  }

  private filterSubCategories(): void {
    this.filterService
      .filter('sub-categories.json', 'title_list', 'Electronic')
      .subscribe(console.log);
  }
}
