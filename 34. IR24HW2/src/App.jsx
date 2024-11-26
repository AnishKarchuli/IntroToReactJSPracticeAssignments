const Cars = ({ cars, model }) => {
  const carDetail = cars.find(car => car.model === model)
  return (
    <div>
      <h2>Car Details</h2>
      <p>Model: {carDetail.model}</p>
      <p>Make: {carDetail.make}</p>
      <p>Year: {carDetail.year}</p>
    </div>
  )
}

const Gyms = ({ gyms, location }) => {
  const gymDetail = gyms.find(gym => gym.location === location)
  return (
    <div>
      <h2>Gym Data</h2>
      <p>Name: {gymDetail.name}</p>
      <p>Location: {gymDetail.location}</p>
      <p>Rating: {gymDetail.rating}</p>
    </div>
  )
}

const Travels = ({ travels, destination }) => {
  const travelDetail = travels.find(travel => travel.destination === destination)
  return (
    <div>
      <h2>Travel Details</h2>
      <p>Destination: {travelDetail.destination}</p>
      <p>Duration: {travelDetail.duration}</p>
      <p>Activities: {travelDetail.activities.join(', ')}</p>
    </div>
  )
}

const Laptops = ({ laptops, processor }) => {
  const laptopDetail = laptops.find(laptop => laptop.processor === processor)
  return (
    <div>
      <h2>Laptop Data</h2>
      <p>Brand: {laptopDetail.brand}</p>
      <p>Processor: {laptopDetail.processor}</p>
      <p>RAM: {laptopDetail.ram}</p>
    </div>
  )
}

const Recipes = ({ recipes, dish }) => {
  const recipeDetail = recipes.find(recipe => recipe.dish === dish)
  return (
    <div>
      <h2>Recipes Details</h2>
      <p>Dish: {recipeDetail.dish}</p>
      <p>Cuisine: {recipeDetail.cuisine}</p>
      <p>Ingredients: {recipeDetail.ingredients.join(', ')}</p>
    </div>
  )
}

const BlogPosts = ({ blogPosts, title }) => {
  const blogPostDetail = blogPosts.find(blogPost => blogPost.title === title)
  return (
    <div>
      <h2>Blog Data</h2>
      <p>Id: {blogPostDetail.id}</p>
      <p>Title: {blogPostDetail.title}</p>
      <p>Content: {blogPostDetail.content}</p>
      <p>Category: {blogPostDetail.category}</p>
    </div>
  )
}

export default function App() {

  const cars = [
    { model: "Car 1", make: "Make 1", year: 2022 },
    { model: "Car 2", make: "Make 2", year: 2021 },
    { model: "Car 3", make: "Make 3", year: 2023 },
  ];

  const gyms = [
    { name: "Gym 1", location: "Location 1", rating: 4.7 },
    { name: "Gym 2", location: "Location 2", rating: 4.2 },
    { name: "Gym 3", location: "Location 3", rating: 4.5 },
  ];

  const travels = [
    {
      destination: "Travel 1",
      duration: "5 days",
      activities: ["Hiking", "Sightseeing"],
    },
    {
      destination: "Travel 2",
      duration: "7 days",
      activities: ["Beach", "Shopping"],
    },
    {
      destination: "Travel 3",
      duration: "3 days",
      activities: ["Cultural Tours", "Photography"],
    },
  ];

  const laptops = [
    { brand: "Laptop 1", processor: "Intel i5", ram: "8GB" },
    { brand: "Laptop 2", processor: "AMD Ryzen 7", ram: "16GB" },
    { brand: "Laptop 3", processor: "Apple M1", ram: "12GB" },
  ];

  const recipes = [
    {
      dish: "Recipe 1",
      cuisine: "Italian",
      ingredients: ["Tomatoes", "Pasta", "Cheese"],
    },
    {
      dish: "Recipe 2",
      cuisine: "Mexican",
      ingredients: ["Beans", "Rice", "Avocado"],
    },
    {
      dish: "Recipe 3",
      cuisine: "Indian",
      ingredients: ["Curry", "Rice", "Naan"],
    },
  ];

  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },
    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },
    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Fashion' }
  ];

  return (
    <main>
      <Cars cars={cars} model="Car 2" />
      <hr />
      <Gyms gyms={gyms} location="Location 2" />
      <hr />
      <Travels travels={travels} destination="Travel 3" />
      <hr />
      <Laptops laptops={laptops} processor="Apple M1" />
      <hr />
      <Recipes recipes={recipes} dish="Recipe 2" />
      <hr />
      <BlogPosts blogPosts={blogPosts} title="Blog Post 3" />
    </main>
  )
}
