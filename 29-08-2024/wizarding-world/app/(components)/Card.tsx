"use client";

import { ICard } from "@/types/ICard";

export default function Card({item}:ICard)  {
  return (
    <div className="flex  justify-center">
      <div className="w-80  p-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <img 
          src={item.coverImage} 
          alt={item.title} 
          className="w-full object-cover rounded-md mb-4"
        />
        <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {item.title}
        </h5>
        <p className="text-gray-700 dark:text-gray-400 mb-2">
          {item.creator}
        </p>
       
        <a 
          href="#" 
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-950 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg 
            className="w-3.5 h-3.5 ml-2" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 14 10"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
