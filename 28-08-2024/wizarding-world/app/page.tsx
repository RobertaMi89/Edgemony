import Card from "@/components/card";
import fetchAllMovies, { fetchAllBooks }  from "@/utils/Api";
import { transformBookToCardItem, transformMovieToCardItem } from "@/utils/Transformers";


export default async function Home() {
  try {
    const movies = await fetchAllMovies();
    const books = await fetchAllBooks();

    const itemsBook = [...movies.map(transformMovieToCardItem)];
    const itemBook =[...books.map(transformBookToCardItem)];

    return (
      <main className="bg-yellow-50">
        <h1 className="text-center font-bold text-5xl my-2 text-blue-950 mt-0 mb-0 p-2">
          Wizarding  World
        </h1>
        <div className="flex flex-wrap">
          {itemsBook.length > 0 ? (
            itemsBook.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p>No items found</p>
          )}
        </div>
        <div className="flex flex-wrap">
          {itemsBook.length > 0 ? (
            itemsBook.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p>No items found</p>
          )}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati", error);
    return (
      <main className="bg-yellow-50">
        <h1 className="text-center font-bold text-5xl my-2 text-blue-950">
          Wizard World
        </h1>
        <p>No items found</p>
      </main>
    );
  }
}