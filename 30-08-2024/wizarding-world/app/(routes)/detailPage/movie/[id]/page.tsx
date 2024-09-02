import { ICardItem } from "@/types/ICard";
import { fetchMovieById } from "@/utils/Api";
import { transformMovieToCardItem } from "@/utils/Transformers";

interface DetailProps {
  params: { id: string };
}

export default async function detailPage({ params }: DetailProps) {
  const { id } = params;
  const itemRaw = await fetchMovieById(id);
  const item = transformMovieToCardItem(itemRaw);

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
