export interface TRating {
  rate: number;
  count: number;
}

export interface TProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TRating;
}

