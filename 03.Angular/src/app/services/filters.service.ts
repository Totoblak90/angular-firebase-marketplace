import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SubCategoryList } from '../interfaces/sub-categories.interface';
import { ProductList } from '../interfaces/product.interface';
import { CategoryList } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private _api = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  filter(
    collection: string,
    attribute: string,
    paramName
  ): Observable<SubCategoryList | ProductList | CategoryList> {
    return this.http.get<SubCategoryList | ProductList | CategoryList>(
      `${this._api}${collection}?orderBy="${attribute}"&equalTo="${paramName}"&print=pretty`
    );
  }
}
