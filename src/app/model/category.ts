export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  childEntities: Category[];
  customData: any;
}
