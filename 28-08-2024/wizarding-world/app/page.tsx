import Card from "@/components/Card";
import fetchAllMovies, { fetchAllBooks }  from "@/utils/Api";
import { transformBookToCardItem, transformMovieToCardItem } from "@/utils/Transformers";


export default async function Home() {
  try {
    const movies = await fetchAllMovies();
    const books = await fetchAllBooks();

    const itemsMovie = [...movies.map(transformMovieToCardItem)];
    const itemsBook =[...books.map(transformBookToCardItem)];

    return (
      <main className="bg-yellow-50">
        <h1 className="text-center font-bold text-5xl my-2 text-blue-950 mt-0 mb-0 p-2">
          Wizarding  World
        </h1>
        <h2 className="text-center text-4xl my-2 text-blue-950 mt-0 mb-0 p-5">Movies</h2>
        <div>
        <div className="flex flex-wrap justify-center">
          {itemsMovie.length > 0 ? (
            itemsMovie.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p>No items found</p>
          )}
        </div>
        <h2 className="text-center text-4xl my-2 text-blue-950 mt-0 mb-0 p-5">Books</h2>
        <div className="flex flex-wrap justify-center">
          {itemsBook.length > 0 ? (
            itemsBook.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p>No items found</p>
          )}
        </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati", error);
    return (
      <main className="bg-yellow-50">
        <h1 className="text-center font-bold text-5xl my-2 text-blue-950">
          Wizarding World
        </h1>
        <p>No items found</p>
      </main>
    );
  }
}