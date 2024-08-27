import Card from "@/components/card";
import { harryPotterBooks } from "@/utils/books";

export default function Home() {
  return (
    <main>
      <h1>Wizard World</h1>
      <div  className="flex">
      {harryPotterBooks.map(b=> <Card book={b}/>)}
      </div>
    </main>
  );
}
