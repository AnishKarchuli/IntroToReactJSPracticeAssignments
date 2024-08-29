import './App.css'

const FilteredLaptopList = ({ laptops }) => {
  const filteredLaptops = laptops.filter(laptop => laptop.price > 4999 && laptop.price < 15000)

  const laptopListing = filteredLaptops.map(laptop => (
    <div key={laptop.id}>
      <h3>Brand: {laptop.brand}</h3>
      <p>Price: {laptop.price}</p>
    </div>
  ))
  return (
    <>
      <h2>Laptops</h2>
      {laptopListing}
    </>
  )
}

const FilteredBookList = ({ books }) => {
  const filteredBooks = books.filter(book => book.genre === "Fantasy")

  const bookListing = filteredBooks.map(book => (
    <div key={book.id}>
      <h3>Title: {book.title}</h3>
      <p>Genre: {book.genre}</p>
    </div>
  ))
  return (
    <>
      <h2>Books</h2>
      {bookListing}
    </>
  )
}

const FilteredPodcastList = ({ podcasts }) => {
  const filteredPodcasts = podcasts.filter(podcast => podcast.duration > 30)

  const podcastListing = filteredPodcasts.map(podcast => (
    <div key={podcast.id}>
      <h3>Title: {podcast.title}</h3>
      <p>Duration: {podcast.duration} mins</p>
    </div>
  ))
  return (
    <>
      <h2>Podcasts</h2>
      {podcastListing}
    </>
  )
}

const FilteredMovieList = ({ movies }) => {
  const filteredMovies = movies.filter(movie => movie.genre === "Action")

  const movieListing = filteredMovies.map(movie => (
    <div key={movie.id}>
      <h3>Title: {movie.title}</h3>
      <p>Genre: {movie.genre}</p>
    </div>
  ))
  return (
    <>
      <h2>Movies</h2>
      {movieListing}
    </>
  )
}

const FilteredJobList = ({ jobs }) => {
  const filteredJobs = jobs.filter(job => job.type === "Full-time")

  const jobListing = filteredJobs.map(job => (
    <div key={job.id}>
      <h3>Title: {job.title}</h3>
      <p>Type: {job.type}</p>
    </div>
  ))
  return (
    <>
      <h2>Jobs</h2>
      {jobListing}
    </>
  )
}

const FilteredSongList = ({ songs }) => {
  const filteredSongs = songs.filter(song => song.artist === "Artist 1")

  const songListing = filteredSongs.map(song => (
    <div key={song.id}>
      <h3>Title: {song.title}</h3>
      <p>Artist: {song.artist}</p>
    </div>
  ))
  return (
    <>
      <h2>Songs</h2>
      {songListing}
    </>
  )
}

export default function App() {

  const laptops = [
    { id: 1, brand: "Dell", price: 8000 },
    { id: 2, brand: "HP", price: 7000 },
    { id: 3, brand: "Lenovo", price: 19000 },
  ];

  const books = [
    { id: 1, title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy" },
    { id: 2, title: "The Hobbit", genre: "Self-help" },
    { id: 3, title: "Mistborn: The Final Empire", genre: "Fantasy" },
  ];

  const podcasts = [
    { id: 1, title: "Tech Talk", duration: 45 },
    { id: 2, title: "Business Insights", duration: 25 },
    { id: 3, title: "Science Hour", duration: 60 },
  ];

  const movies = [
    { id: 1, title: "Mission Impossible", genre: "Action" },
    { id: 2, title: "Die Hard", genre: "Action" },
    { id: 3, title: "The Avengers", genre: "Adventure" },
  ];

  const jobs = [
    { id: 1, title: "Software Engineer", type: "Full-time" },
    { id: 2, title: "Marketing Manager", type: "Part-time" },
    { id: 3, title: "Data Analyst", type: "Full-time" },
  ];

  const songs = [
    { id: 1, title: "Song 1", artist: "Artist 1" },
    { id: 2, title: "Song 2", artist: "Artist 2" },
    { id: 3, title: "Song 3", artist: "Artist 1" },
  ];
  
  return (
    <main>
      <FilteredLaptopList laptops={laptops} />
      <hr />
      <FilteredBookList books={books} />
      <hr />
      <FilteredPodcastList podcasts={podcasts} />
      <hr />
      <FilteredMovieList movies={movies} />
      <hr />
      <FilteredJobList jobs={jobs} />
      <hr />
      <FilteredSongList songs={songs} />
    </main>
  )
}
