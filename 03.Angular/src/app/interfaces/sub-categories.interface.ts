export interface SubCategoryList {
  [key: string]: SubCategory;
}

export interface SubCategory {
  category: string;
  image: string;
  name: string;
  products_inventory: number;
  title_list: string;
  url: string;
  view: number;
}
