<div>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg">
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        Insert the book here
      </h1>
      <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
        Inserisci title, author, genre, isbn, description
      </p>
      <form
        action="#"
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <div>
          <label className="sr-only">Title</label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter title"
            />
          </div>
        </div>
        <div>
          <label className="sr-only">Author</label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter author"
            />
          </div>
        </div>
        <div>
          <label className="sr-only">ISBN</label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter isbn"
            />
          </div>
        </div>
        <div>
          <label className="sr-only">Genre</label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter genre"
            />
          </div>
        </div>
        <div>
          <label className="sr-only">Description</label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter description"
            />
          </div>
        </div>
        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>;
