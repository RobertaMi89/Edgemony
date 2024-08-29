export interface IMovie {
    id: string;
    type: string;
    attributes: IMovieAttributes;
    links: IMovieLinks;
  }
  
  interface IMovieAttributes {
    slug: string;
    box_office: string;
    budget: string;
    cinematographers: string[];
    directors: string[];
    distributors: string[];
    editors: string[];
    music_composers: string[];
    poster: string;
    producers: string[];
    rating: string;
    release_date: string;
    running_time: string;
    screenwriters: string[];
    summary: string;
    title: string;
    trailer: string;
    wiki: string;
  }
  
  interface IMovieLinks {
    self: string;
  }
  