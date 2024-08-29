import './App.css'

const LaptopList = ({ laptops }) => {
  const laptopListing = laptops.map(laptop => (
    <div key={laptop.id}>
      <h3>{laptop.brand}</h3>
      <p>Price: ${laptop.price}</p>
    </div>
  ))
  return (
    <>
      <h2>Laptops</h2>
      {laptopListing}
    </>
  )
}

const TouristSpotList = ({ touristSpots }) => {
  const touristSpotListing = touristSpots.map(spot => (
    <div key={spot.id}>
      <h3>{spot.place}</h3>
      <p>Location: {spot.location}</p>
    </div>
  ))
  return (
    <>
      <h2>Tourist Spots</h2>
      {touristSpotListing}
    </>
  )
}

const PodcastList = ({ podcasts }) => {
  const podcastListing = podcasts.map(podcast => (
    <div key={podcast.id}>
      <h3>{podcast.episode}</h3>
      <p>Duration: {podcast.duration}</p>
    </div>
  ))
  return (
    <>
      <h2>Podcast Episodes</h2>
      {podcastListing}
    </>
  )
}

const NewsList = ({ news }) => {
  const newsListing = news.map(article => (
    <div key={article.id}>
      <h3>{article.article}</h3>
      <p>{article.description}</p>
    </div>
  ))
  return (
    <>
      <h2>News Articles</h2>
      {newsListing}
    </>
  )
}

const GameList = ({ games }) => {
  const gameListing = games.map(game => (
    <div key={game.id}>
      <h3>{game.name}</h3>
      <p>Genre: {game.genre}</p>
    </div>
  ))
  return (
    <>
      <h2>Games</h2>
      {gameListing}
    </>
  )
}

export default function App() {

  const laptops = [
    {id: 1, brand: "Dell", price: 999},
    {id: 2, brand: "HP", price: 899},
    {id: 3, brand: "Lenovo", price: 1099}
  ];
  const touristSpots = [
    {id: 1, place: "Grand Canyon", location: "Arizona, USA"},
    {id: 2, place: "Eiffel Tower", location: "Paris, France"},
    {id: 3, place: "Great Wall of China", location: "Beijing, China"}
  ];
  const podcasts = [
    {id: 1, episode: "Episode 1", duration: "30 minutes"},
    {id: 2, episode: "Episode 2", duration: "45 minutes"},
    {id: 3, episode: "Episode 3", duration: "60 minutes"}
  ];
  const news = [
    {id: 1, article: "News 1", description: "Description 1"},
    {id: 2, article: "News 2", description: "Description 2"},
    {id: 3, article: "News 3", description: "Description 3"}
  ];
  const games = [
    {id: 1, name: "Game 1", genre: "Action"},
    {id: 2, name: "Game 2", genre: "Adventure"},
    {id: 3, name: "Game 3", genre: "Strategy"}
  ]
  return (
    <main>
      <LaptopList laptops={laptops} />
      <hr />
      <TouristSpotList touristSpots={touristSpots} />
      <hr />
      <PodcastList podcasts={podcasts} />
      <hr />
      <NewsList news={news} />
      <hr />
      <GameList games={games} />
    </main>
  )
}
