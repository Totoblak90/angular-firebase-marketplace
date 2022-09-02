import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CategoryResponse,
  CategoryMapped,
} from '../interfaces/categories.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private _api: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CategoryMapped[]> {
    return this.http
      .get<CategoryResponse[]>(`${this._api}categories.json`)
      .pipe(
        map((categories) =>
          categories.map<CategoryMapped>((c) => ({
            icon: c.icon,
            image: c.image,
            name: c.name,
            url: c.url,
            view: c.view,
            title_list: JSON.parse(c.title_list),
          }))
        )
      );
  }
}
