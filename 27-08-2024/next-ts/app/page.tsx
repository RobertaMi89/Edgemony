import Card from "@/components/card";
import { harryPotterBooks } from "@/utils/books";

export default function Home() {
  return (
    <main className="bg-yellow-50">
      <h1 className="text-center font-bold text-5xl my-2 text-blue-950">Wizard World</h1>
      <div  className="flex">
      {harryPotterBooks.map(b=> <Card book={b}/>)}
      </div>
    </main>
  );
}
