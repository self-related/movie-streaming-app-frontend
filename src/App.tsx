import { Outlet } from 'react-router-dom';
import './App.css'
import NavBarLeft from './components/NavBarLeft';
import NavBarTop from './components/NavBarTop';
import { createContext, useContext, useState } from 'react';
import DetailedInfo from './components/DetailedInfo';
import { Movie } from './types';

// в контексте передается [clickedMovie, setClickedMovie]
const ClickedMovieContext = createContext<[Movie | null, React.Dispatch<React.SetStateAction<Movie | null>> | null]>([null, null]);

export const useClickedMovieContext = () => useContext(ClickedMovieContext); // сразу получить контекст через хук

function App() {

    const [clickedMovie, setClickedMovie] = useState<Movie | null>(null);

  return (
    <>
        <main className="main--split">
            <NavBarLeft />
            <ClickedMovieContext.Provider value={[clickedMovie, setClickedMovie]}>
                <div className="page_content">
                    <NavBarTop />
                    <Outlet />
                    <DetailedInfo />
                </div>
            </ClickedMovieContext.Provider>
        </main>
        <div className='empty-space'></div>
    </>
  );
}

export default App
