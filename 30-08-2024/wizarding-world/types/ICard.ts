export interface ICard{
    item:ICardItem;
}

export interface ICardItem {
    id: string;
    title: string;
    coverImage: string;
    description: string;
    creator: string; 
    type: string;
  }
