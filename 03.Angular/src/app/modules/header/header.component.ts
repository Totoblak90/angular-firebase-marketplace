import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriesService } from '../../services/categories.service';
import { FiltersService } from '../../services/filters.service';
import {
  SubCategory,
  SubCategoryList,
} from '../../interfaces/sub-categories.interface';
import { CategoryMapped } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
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
}
