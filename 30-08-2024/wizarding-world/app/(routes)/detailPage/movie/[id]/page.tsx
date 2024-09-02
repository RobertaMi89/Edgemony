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
    <>
      <div>
        <div>
          <h2></h2>
          <p></p>
        </div>
      </div>

      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img src={item.coverImage} alt={item.title} />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {item.title}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex"></div>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>

              <p>{item.creator}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
