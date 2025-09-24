export type Tour = {
  id: string;
  name: string;
  type: string;
  startPoint: string;
  destination: string;
  duration: string;
  price: number;
  image: string;
  description: string;
}

export interface SearchParams {
  searchText?: string;
  tourType?: string;
  startPoint?: string;
  destination?: string;
}
