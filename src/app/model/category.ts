export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  children: Category[];
  customData: any;
}
