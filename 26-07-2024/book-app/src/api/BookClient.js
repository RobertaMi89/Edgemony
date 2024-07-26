export const getBookList = async () => {
  try {
    const res = await fetch("http://localhost:3000/books");
    return res.json();
  } catch (error) {
    throw Error(error);
  }
};

export const getBookDetail = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/book-detail/${id}`);
    return res.json();
  } catch (error) {
    throw Error(error);
  }
};

export const addBook = async (body) => {
  const id = self.crypto.randomUUID();

  try {
    const res = await fetch("http://localhost:3000/book-detail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: self.crypto.randomUUID(), ...body }),
    });
    return res.json();
  } catch (error) {
    throw Error(error);
  }
};

export const editBook = (body) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...body,
      });
    }, 3000);
  });
};

export const deleteBook = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`l'elemento ${id} è stato cancellato con successo`);
    }, 3000);
  });
};
/* export const getBookList = async () => {
	try {

		const res = await fetch("https://jsonplaceholde.typicode.com/users");
		return res.json()

	} catch (error) {
		throw new Error("Error:", error)

	}
};  */
