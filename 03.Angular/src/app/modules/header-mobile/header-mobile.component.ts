import { Component } from '@angular/core';
import { CategoryMapped } from 'src/app/interfaces/categories.interface';
import {
  SubCategory,
  SubCategoryList,
} from 'src/app/interfaces/sub-categories.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { FiltersService } from 'src/app/services/filters.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css'],
})
export class HeaderMobileComponent {
  baseImagePath: string = environment.assetUrl;
  categories: CategoryMapped[] = [];
  subCategoriesFiltered: SubCategory[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private filterService: FiltersService
  ) {
    this.getCategories();
  }

  private getCategories(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.getSubCategories(categories);
      },
      error: (err) => console.log(err),
    });
  }

  private getSubCategories(categories: CategoryMapped[]): void {
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
  }

  toggleSubMenu(element: HTMLUListElement) {
    element.style.display === 'block'
      ? (element.style.display = 'none')
      : (element.style.display = 'block');
  }
}
