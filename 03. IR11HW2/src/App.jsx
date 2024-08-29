import "./App.css";

const WelcomeMessage = () => {
  return <h1>Discover the World of JSX!</h1>;
};

const actorName = "Tom Hardy";
const GreetActor = () => {
  return <h1>Welcome, {actorName} fans!</h1>;
};

const link = "https://www.reactjs.org";
const ExternalLink = () => {
  return (
    <a href={link} target="_blank">
      Explore React Documentation
    </a>
  );
};

const videoUrl = "https://www.example.com/video.mp4";
const VideoPlayer = () => {
  return (
    <div>
      <video controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

const movie = {
  title: "Forrest Gump",
  director: "Robert Zemeckis",
  year: 1994,
  rating: "PG-13",
  duration: "2h 22min",
};
const MovieDetails = () => {
  return (
    <>
      <h2>Movie Details</h2>
      <p>
        <strong>Title: </strong>
        {movie.title}
      </p>
      <p>
        <strong>Director: </strong>
        {movie.director}
      </p>
      <p>
        <strong>Year: </strong>
        {movie.year}
      </p>
      <p>
        <strong>Rating: </strong>
        {movie.rating}
      </p>
      <p>
        <strong>Duration: </strong>
        {movie.duration}
      </p>
    </>
  );
};


export default function App() {
  return (
    <div>
      <WelcomeMessage />
      <GreetActor />
      <ExternalLink />
      <VideoPlayer />
      <MovieDetails />
    </div>
  );
}
