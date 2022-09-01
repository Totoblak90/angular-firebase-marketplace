export interface CategoryList {
  [key: string]: CategoryResponse;
}
export interface CategoryResponse {
  icon: string;
  image: string;
  name: string;
  title_list: string;
  url: string;
  view: number;
}

export interface CategoryMapped {
  icon: string;
  image: string;
  name: string;
  title_list: string[];
  url: string;
  view: number;
}
