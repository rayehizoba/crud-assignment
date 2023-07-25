import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as booksActions from "./store/books.action";
import {setBook} from "./store/book.action";
import * as bookActions from "./store/book.action";

function BooksPage(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const books = useSelector(state => state.books.collection);
  const booksFetch = useSelector(state => state.books.fetch);

  React.useEffect(() => {
    dispatch(booksActions.fetchBooks());
  }, []);

  const onClickEdit = book => () => {
    dispatch(bookActions.setBook(book));
  }

  const onClickDelete = book => () => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      dispatch(bookActions.deleteBook(book.id));
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-5 space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Books ({books.length})</h1>
        <Link to="/book" state={{background: location}} className="btn-primary">
          Add Book
        </Link>
      </div>

      {booksFetch && (
        <p className="text-center">Loading books...</p>
      )}

      {booksFetch || (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Year
            </th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book, index) => (
            <tr key={book.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {book.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {book.author}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {book.year}
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex space-x-3 justify-end text-lg">
                <Link
                  to={"/book/" + book.id}
                  onClick={onClickEdit(book)}
                  state={{background: location}} className="text-blue-500 hover:opacity-75"
                >
                  <i className="mdi mdi-square-edit-outline"></i>
                </Link>
                <button
                  type="button"
                  onClick={onClickDelete(book)}
                  className="text-red-500 hover:opacity-75"
                >
                  <i className="mdi mdi-trash-can-outline"></i>
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default BooksPage;