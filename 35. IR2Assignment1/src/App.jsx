const BookDetail = ({ books }) => {
  const filterBookDetail = books.filter(
    (book) => book.genre === "Science Fiction",
  );

  const displayFilteredBook = filterBookDetail.map((book) => (
    <div key={book.id}>
      <h3>Title: {book.title}</h3>
      <p>Genre: {book.genre}</p>
    </div>
  ));
  return (
    <div>
      <h2>Book Details</h2>
      {displayFilteredBook}
    </div>
  );
};

const UserDetail = ({ users }) => {
  const filterUsers = users.filter((user) => user.role === "Admin");
  const displayFilteredUsers = filterUsers.map((user) => (
    <div key={user.id}>
      <h3>Name: {user.name}</h3>
      <p>Role: {user.role}</p>
    </div>
  ));
  return (
    <div>
      <h2>User Details</h2>
      {displayFilteredUsers}
    </div>
  );
};

const ProductDetail = ({ products }) => {
  const filterProducts = products.filter((product) => product.price > 100);
  const displayFilterProducts = filterProducts.map((product) => (
    <div key={product.id}>
      <h3>Name: {product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Color: {product.features.color}</p>
      <p>Water Proof: {product.features.isWaterProof ? "Yes" : "No"}</p>
    </div>
  ));
  return (
    <div>
      <h2>Product Details</h2>
      {displayFilterProducts}
    </div>
  );
};

const CityDetail = ({ cities }) => {
  const filterCities = cities.filter((city) => city.population > 1000000);
  const displayFilteredCities = filterCities.map((city) => (
    <div key={city.id}>
      <h3>Name: {city.name}</h3>
      <p>Population: {city.population}</p>
    </div>
  ));
  return (
    <div>
      <h2>City Details</h2>
      {displayFilteredCities}
    </div>
  );
};

const MovieDetail = ({ movies }) => {
  const filterMovies = movies.filter((movie) => movie.releaseYear > 2015);
  const displayFilteredMovies = filterMovies.map((movie) => (
    <div key={movie.id}>
      <h3>Title: {movie.title}</h3>
      <p>Release Year: {movie.releaseYear}</p>
    </div>
  ));
  return (
    <div>
      <h2>Movie Details</h2>
      {displayFilteredMovies}
    </div>
  );
};

const PodcastDetail = ({ podcasts }) => {
  const filterPodcasts = podcasts.filter(
    (podcast) => podcast.featured === true,
  );
  const displayFilteredPodcasts = filterPodcasts.map((podcast) => (
    <div key={podcast.id}>
      <h3>Title: {podcast.title}</h3>
      <p>Host: {podcast.host.join(", ")}</p>
      <p>Featured: {podcast.featured ? "Yes" : "No"}</p>
    </div>
  ));
  return (
    <>
      <h2>Podcast Details</h2>
      {displayFilteredPodcasts}
    </>
  );
};

const AvgMovieDuration = ({ movies2 }) => {
  const filterMovies = movies2.filter((movie) => movie.releaseYear >= 2000);
  const totalDuration = filterMovies.reduce(
    (acc, curr) => acc + curr.duration,
    0,
  );
  const avgDuration = totalDuration / filterMovies.length;
  return (
    <>
      <h2>Average Movie Duration</h2>
      <p>{avgDuration}</p>
    </>
  );
};

const Tasks = ({ tasks }) => {
  const filterTasks = tasks.filter(task => task.completed === true)
  const totalTasksCompleted = filterTasks.length
  return (
    <>
      <h2>Total Tasks Completed</h2>
      <p>{totalTasksCompleted}</p>
    </>
  )
}

const VehicleDetail = ({ vehicles }) => {
  const totalDistance = vehicles.reduce((acc, curr) => acc + curr.distance, 0)
  return (
    <>
      <h2>Total Distance Travelled</h2>
      <p>{totalDistance}</p>
    </>
  )
}

const TotalRevenue = ({ sales }) => {
  const totalRevenue = sales.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
  return (
    <>
      <h2>Total Revenue</h2>
      <p>{totalRevenue}</p>
    </>
  )
}

export default function App() {
  const books = [
    { id: 1, title: "Dune", genre: "Science Fiction" },
    { id: 2, title: "Neuromancer", genre: "Science Fiction" },
    { id: 3, title: "Foundation", genre: "Sci-fi" },
  ];

  const users = [
    { id: 1, name: "Alice", role: "User" },
    { id: 2, name: "Bob", role: "Admin" },
    { id: 3, name: "Charlie", role: "User" },
    { id: 4, name: "John", role: "Admin" },
  ];

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1200,
      features: { color: "green", isWaterProof: false },
    },
    {
      id: 2,
      name: "Smartphone",
      price: 800,
      features: { color: "blue", isWaterProof: true },
    },
    {
      id: 3,
      name: "Headphones",
      price: 150,
      features: { color: "silver", isWaterProof: false },
    },
  ];

  const cities = [
    { id: 1, name: "New York", population: 8500000 },
    { id: 2, name: "Los Angeles", population: 539900 },
    { id: 3, name: "Chicago", population: 2700000 },
  ];

  const movies = [
    { id: 1, title: "Inception", releaseYear: 2010 },
    { id: 2, title: "La La Land", releaseYear: 2016 },
    { id: 3, title: "Interstellar", releaseYear: 2014 },
    { id: 4, title: "Dune 2", releaseYear: 2024 },
  ];

  const podcasts = [
    { id: 1, title: "Tech Talk", host: ["host 1"], featured: true },
    { id: 2, title: "Business Insights", host: ["host 2"], featured: false },
    {
      id: 3,
      title: "Science Hour",
      host: ["host 3", "host 4"],
      featured: true,
    },
  ];

  const movies2 = [
    { id: 1, title: "The Matrix", duration: 136, releaseYear: 1999 },
    { id: 2, title: "Inception", duration: 148, releaseYear: 2010 },
    { id: 3, title: "Avatar", duration: 162, releaseYear: 2009 },
  ];

  const tasks = [
  { id: 1, description: "Complete project proposal", completed: true },
  { id: 2, description: "Review client feedback", completed: false },
  { id: 3, description: "Submit final report", completed: true },
];

  const vehicles = [
  { id: 1, name: "Car", distance: 150 },
  { id: 2, name: "Bicycle", distance: 10 },
  { id: 3, name: "Motorcycle", distance: 75 },
];

  const sales = [
  { id: 1, product: "Widget A", price: 25, quantity: 10 },
  { id: 2, product: "Gadget B", price: 50, quantity: 5 },
  { id: 3, product: "Tool C", price: 30, quantity: 8 },
];
  
  return (
    <main>
      <BookDetail books={books} />
      <hr />
      <UserDetail users={users} />
      <hr />
      <ProductDetail products={products} />
      <hr />
      <CityDetail cities={cities} />
      <hr />
      <MovieDetail movies={movies} />
      <hr />
      <PodcastDetail podcasts={podcasts} />
      <hr />
      <AvgMovieDuration movies2={movies2} />
      <hr />
      <Tasks tasks={tasks} />
      <hr />
      <VehicleDetail vehicles={vehicles} />
      <hr />
      <TotalRevenue sales={sales} />
    </main>
  );
}
