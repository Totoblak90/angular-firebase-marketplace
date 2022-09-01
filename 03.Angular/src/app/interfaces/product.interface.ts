export interface ProductList {
  [key: string]: Product;
}

export interface Product {
  category: string;
  default_banner: string;
  delivery_time: string[];
  description: string;
  details: string;
  feedback: ProductFeedback;
  gallery: string[];
  horizontal_slider: ProductHorizontalSlider;
  image: string;
  name: string;
  offer: string[];
  price: number;
  reviews: ProductReview[];
  shipping: number;
  specification: string;
  stock: number;
  store: string;
  sub_category: string;
  tags: string[];
  title_list: string;
  top_banner: string;
  url: string;
  vertical_slider: string;
  video: string;
}

export interface ProductFeedback {
  type: string;
  comment: string;
}

export interface ProductHorizontalSlider {
  'H4 tag': string;
  'H3-1 tag': string;
  'H3-2 tag': string;
  'H3-3 tag': string;
  'H3-4s tag': string;
  'Button tag': string;
  'IMG tag': string;
}

export interface ProductReview {
  review: number;
  comment: string;
}

export interface ProductTopBanner {
  'H3 tag': string;
  'P1 tag': string;
  'H4 tag': string;
  'P2 tag': string;
  'Span tag': string;
  'Button tag': string;
  'IMG tag': string;
}
