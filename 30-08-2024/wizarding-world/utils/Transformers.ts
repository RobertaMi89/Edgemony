import { IBook } from "@/types/IBook";
import { ICardItem } from "@/types/ICard";
import { IMovie } from "@/types/IMovie";



export const transformBookToCardItem = (book: IBook): ICardItem => ({
  id: book.id,
  title: book.attributes.title,
  coverImage: book.attributes.cover,
  description: book.attributes.summary,
  creator: book.attributes.author,
});

export const transformMovieToCardItem = (movie: IMovie): ICardItem => ({
  id: movie.id,
  title: movie.attributes.title,
  coverImage: movie.attributes.poster,
  description: movie.attributes.summary,
  creator: movie.attributes.directors[0],
});
