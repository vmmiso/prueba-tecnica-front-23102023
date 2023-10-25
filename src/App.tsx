import { Link, Route, Routes } from 'react-router-dom';

import ValidateMovie from './pages/MovieDetailsPage';
import MoviesListPage from './pages/MoviesListPage';
import MyRatedMoviesPage from './pages/MyRatedMoviesPage';
import SearchMoviesPage from './pages/SearchMoviesPage';

function App() {
  return (
    <>
      <header className='flex w-full justify-between bg-slate-500 p-2 text-white sm:px-10'>
        <h1>Movies App</h1>
        <nav>
          <ul>
            <li className='inline p-1 hover:text-slate-300 sm:p-4'>
              <Link to='/'>Movies</Link>
            </li>
            <li className='inline p-1 hover:text-slate-300 sm:p-4'>
              <Link to='/search'>Search</Link>
            </li>
            <li className='inline p-1 hover:text-slate-300 sm:p-4'>
              <Link to='/mylist'>My list</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='p-3'>
        <Routes>
          <Route path='/' element={<MoviesListPage />} />
          <Route path='movie/:id' element={<ValidateMovie />} />
          <Route path='search' element={<SearchMoviesPage />} />
          <Route path='mylist' element={<MyRatedMoviesPage />} />
          <Route path='*' element={<div>Not found</div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
