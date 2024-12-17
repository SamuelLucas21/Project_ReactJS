import React, { useState } from 'react';
import './App.css';
import logo from './Images/logoipsum.png';
import logo2 from './Images/logoipsum-2.png';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo Ipsum" className="navbar-logo" />
      </div>
    </nav>
  );
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const images = [
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400/ff0000",
    "https://via.placeholder.com/800x400/00ff00",
  ];

  const movies = [
    { id: 1, title: 'Movie 1', image: 'https://via.placeholder.com/200x300/0000ff' },
    { id: 2, title: 'Movie 2', image: 'https://via.placeholder.com/200x300/ff00ff' },
    { id: 3, title: 'Movie 3', image: 'https://via.placeholder.com/200x300/00ffff' },
    { id: 4, title: 'Movie 4', image: 'https://via.placeholder.com/200x300/ff8800' },
    { id: 5, title: 'Movie 5', image: 'https://via.placeholder.com/200x300/ff4444' },
    { id: 6, title: 'Movie 6', image: 'https://via.placeholder.com/200x300/4444ff' },
    { id: 7, title: 'Movie 7', image: 'https://via.placeholder.com/200x300/00ff44' },
    { id: 8, title: 'Movie 8', image: 'https://via.placeholder.com/200x300/8800ff' },
    { id: 9, title: 'Movie 9', image: 'https://via.placeholder.com/200x300/8888ff' },
    { id: 10, title: 'Movie 10', image: 'https://via.placeholder.com/200x300/8888ff' },
    { id: 11, title: 'Movie 1', image: 'https://via.placeholder.com/200x300/0000ff' },
    { id: 12, title: 'Movie 2', image: 'https://via.placeholder.com/200x300/ff00ff' },
    { id: 13, title: 'Movie 3', image: 'https://via.placeholder.com/200x300/00ffff' },
    { id: 14, title: 'Movie 4', image: 'https://via.placeholder.com/200x300/ff8800' },
    { id: 15, title: 'Movie 5', image: 'https://via.placeholder.com/200x300/ff4444' },
    { id: 16, title: 'Movie 6', image: 'https://via.placeholder.com/200x300/4444ff' },
    { id: 17, title: 'Movie 7', image: 'https://via.placeholder.com/200x300/00ff44' },
    { id: 18, title: 'Movie 8', image: 'https://via.placeholder.com/200x300/8800ff' },
    { id: 19, title: 'Movie 9', image: 'https://via.placeholder.com/200x300/8888ff' }
  ];

  const moviesPerPage = 10;
  const totalPages = Math.ceil(movies.length / moviesPerPage);
  
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies
    .filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(indexOfFirstMovie, indexOfLastMovie);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleRadialClick = (index) => {
    setCurrentIndex(index);
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <NavBar />
      
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={handlePrev}>
          &#10094;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`carousel-image ${currentIndex !== 0 ? 'fade-in' : ''}`}
        />
        <button className="carousel-btn next" onClick={handleNext}>
          &#10095;
        </button>

        <div className="carousel-radial-buttons">
          <button className={`carousel-btn-1 ${currentIndex === 0 ? 'active' : ''}`} onClick={() => handleRadialClick(0)}></button>
          <button className={`carousel-btn-2 ${currentIndex === 1 ? 'active' : ''}`} onClick={() => handleRadialClick(1)}></button>
          <button className={`carousel-btn-3 ${currentIndex === 2 ? 'active' : ''}`} onClick={() => handleRadialClick(2)}></button>
        </div>
      </div>

      <div className="movie-catalog">
        <h2>Search for Movies</h2>

        <div className="search-filter">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="movie-catalog-container">
          {currentMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} className="movie-card-image" />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Before
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logo2} alt="Logo Ipsum" className="navbar-logo" />            
          </div>
          <hr className="footer-separator" />
          <div className="footer-left">
            <a href="/terms" className="footer-link">Terms & Conditions</a>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
          </div>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
