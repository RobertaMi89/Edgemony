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
    <>
      <div className="self-start">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-12 text-lime-700 cursor-pointer hover:text-lime-600"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
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
