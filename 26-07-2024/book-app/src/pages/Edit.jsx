import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBookDetail, editBook } from "../api/BookClient";
import BookForm from "../components/BookForm";
import Loading from "../components/Loading";
import { useToast } from "./ToastContext";

function Edit() {
  const { showToast } = useToast();
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [isError, setIsError] = useState({ message: "", isError: false });
  const [isLoading, setIsLoading] = useState(true);

  const getBook = async (id) => {
    try {
      const data = await getBookDetail(id);
      setBook(data);
    } catch (error) {
      console.log(error);
      setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBook(id);
  }, []);

  const handleEdit = async (body) => {
    try {
      const res = await editBook({ id, ...body });
      console.log(res);
      navigate(`/books/${id}`, { replace: true });
      showToast("Book edited successfully", "info");
    } catch (error) {
      console.log(error);
      setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
      });
      showToast("Failed to edit the book", "error");
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Edit the book here
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Inserisci title, author, genre, isbn, description
          </p>
          <BookForm value={book} onSubmit={handleEdit} />
          {isError.isError && (
            <div
              role="alert"
              className="rounded border-s-4 border-red-500 bg-red-50 p-4"
            >
              <strong className="block font-medium text-red-800">
                {" "}
                Something went wrong{" "}
              </strong>

              <p className="mt-2 text-sm text-red-700">{isError.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Edit;
