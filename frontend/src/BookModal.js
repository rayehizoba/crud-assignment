import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as bookActions from "./store/book.action";
import {changedInput, preventDefault} from "./helpers";

export const BookModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const title = bookId ? 'Edit Book' : 'Create Book';
  const book = useSelector(state => state.book.model);
  const bookCreateSuccess = useSelector(state => state.book.createSuccess);
  const bookEditSuccess = useSelector(state => state.book.editSuccess);
  const [form, setForm] = useState({
    title: book?.title,
    author: book?.author,
    year: book?.year,
  });

  useEffect(() => {
    if (bookId && !book) {
      dispatch(bookActions.fetchBook(bookId));
    }
  }, [bookId]);

  useEffect(() => {
    if (book) {
      setForm(book);
    }
  }, [book]);

  useEffect(() => {
    if (bookCreateSuccess || bookEditSuccess) {
      navigate(-1);
      dispatch(bookActions.clearErrors());
    }
  }, [bookCreateSuccess, bookEditSuccess]);

  const onSubmit = () => {
    if (bookId) {
      dispatch(bookActions.editBook(bookId, form));
    } else {
      dispatch(bookActions.createBook(form));
    }
  }

  return (
    <div className="modalDiv">
      <div className="bg-white rounded-xl p-5 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-10 aspect-square rounded-full hover:bg-gray-100 transition text-2xl grid place-content-center"
          >
            <i className="mdi mdi-close"></i>
          </button>
        </div>

        {/* Body */}
        <form onSubmit={preventDefault(onSubmit)} className={"mt-5 space-y-5"}>
          <fieldset>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              className="form-input"
              required
              autoFocus
              value={form.title}
              onChange={changedInput(title => setForm({...form, title}))}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              className="form-input"
              required
              value={form.author}
              onChange={changedInput(author => setForm({...form, author}))}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="year">Year</label>
            <input
              id="year"
              type="number"
              className="form-input"
              required
              value={form.year}
              onChange={changedInput(year => setForm({...form, year}))}
            />
          </fieldset>

          <button type="submit" className="btn-primary ml-auto block">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};