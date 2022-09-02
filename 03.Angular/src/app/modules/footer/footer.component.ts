import { Component, OnInit } from '@angular/core';
import { CategoryMapped } from 'src/app/interfaces/categories.interface';
import {
  SubCategory,
  SubCategoryList,
} from 'src/app/interfaces/sub-categories.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { FiltersService } from 'src/app/services/filters.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  baseImagePath: string = environment.assetUrl;
  categories: CategoryMapped[] = [];
  subCategoriesFiltered: SubCategory[] = [];
  isLoaded = false;

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
    let subCategoriesLoaded = 0;
    categories.forEach((c) => {
      c.title_list.forEach((title) => {
        this.filterService
          .filter('sub-categories.json', 'title_list', title)
          .subscribe({
            next: (res: SubCategoryList) => {
              subCategoriesLoaded += Object.keys(res).length;
              for (let key in res) {
                this.subCategoriesFiltered.push(res[key]);
                if (this.subCategoriesFiltered.length === subCategoriesLoaded) {
                  this.isLoaded = true;
                }
              }
            },
            error: (err) => console.log(err),
          });
      });
    });
  }
}
