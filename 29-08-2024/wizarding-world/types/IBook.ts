export interface IBook {
    id: string;
    type: string;
    attributes: IBookAttributes;
    relationships: IBookRelationships;
    links: IBookLinks;
  }
  
 interface IBookAttributes {
    slug: string;
    author: string;
    cover: string;
    dedication: string;
    pages: number;
    release_date: string;
    summary: string;
    title: string;
    wiki: string;
  }
  
  interface IBookRelationships {
    chapters: {
      data: IChapter[];
    };
  }
  
 interface IChapter {
    id: string;
    type: string;
  }
  
  interface IBookLinks {
    self: string;
  }
  