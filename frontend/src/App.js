import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import BooksPage from "./BooksPage";
import {BookModal} from "./BookModal";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div>
      <Routes location={background || location}>
        <Route path="/" element={<BooksPage/>}/>
          {/*<Route path="book" element={<BookModal/>}/>*/}
          {/*<Route path="book/:bookId" element={<BookModal/>}/>*/}
      </Routes>
      {background && (
        <Routes>
          <Route path="book" element={<BookModal/>}/>
          <Route path="book/:bookId" element={<BookModal/>}/>
        </Routes>
      )}
    </div>
  );
}

export default App;
