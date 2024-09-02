import { IBook } from "@/types/IBook";
import { IMovie } from "@/types/IMovie";

const API_BASE_URL='https://api.potterdb.com/';

//endpoint per prendere tutti i film

export default async function fetchAllMovies(): Promise<IMovie[]> {
      try {
      const response = await fetch(`${API_BASE_URL}/v1/movies`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data =( await response.json()).data;
      return data;
    } catch (error) {
      console.error("Errore durante il recupero dei film:", error);
      throw error;
    }
  }

  // Funzione per prendere i dettagli di un film per ID
export async function fetchMovieById(id: string): Promise<IMovie> {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/movies/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = (await response.json()).data;
    return data;
  } catch (error) {
    console.error("Errore durante il recupero del film:", error);
    throw error;
  }
}

//endpoint per prendere tutti i libri

export async function fetchAllBooks(): Promise<IBook[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/books`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data =( await response.json()).data;
    return data;
  } catch (error) {
    console.error("Errore durante il recupero dei libri:", error);
    throw error;
  }
}

// Funzione per prendere i dettagli di un libro per ID
export async function fetchBookById(id: string): Promise<IBook> {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/books/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = (await response.json()).data;
    
    return data;
  } catch (error) {
    console.error("Errore durante il recupero del libro:", error);
    throw error;
  }
}