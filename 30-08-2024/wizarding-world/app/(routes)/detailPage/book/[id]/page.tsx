import { ICardItem } from "@/types/ICard";
import { fetchBookById } from "@/utils/Api";
import { transformBookToCardItem } from "@/utils/Transformers";

interface DetailProps {
  params: { id: string };
}

export default async function detailPage({ params }: DetailProps) {
  const { id } = params;
  const itemRaw = await fetchBookById(id);
  const item = transformBookToCardItem(itemRaw);

  return (
    <div>
      <div>
        <img src={item.coverImage} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Created by: {item.creator}</p>
      </div>
    </div>
  );
}
