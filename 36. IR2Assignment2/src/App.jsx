const TotalCalorieBurned = ({ exercises }) => {
  const totalCalories = exercises.reduce((acc, curr) => acc + curr.caloriesBurned, 0)
  return(
    <>
      <h2>Total Calorie Burned</h2>
      <p>{totalCalories}</p>
    </>
  )
}

const TotalSongDuration = ({ songs }) => {

  const filterSongsByRating = songs.filter(song => song.rating > 3.9)
  
  const totalDuration = filterSongsByRating.reduce((acc, curr) => acc + curr.duration, 0)
  return (
    <>
      <h2>Total Song Duration</h2>
      <p>{totalDuration}</p>
    </>
  )
}

const Books = ({ books, title }) => {
  const bookDetail = books.find(book => book.title === title)
  return (
    <div>
      <h2>Book Detail</h2>
      <p>Title: {bookDetail.title}</p>
      <p>Author: {bookDetail.author}</p>
      <p>Genre: {bookDetail.genre}</p>
    </div>
  )
}

const Songs = ({ songs2, title}) => {
  const songDetail = songs2.find(song => song.title === title)
  return (
    <>
      <h2>Song Detail</h2>
      <p>Title: {songDetail.title}</p>
      <p>Artist: {songDetail.artist}</p>
      <p>Genre: {songDetail.genre}</p>
    </>
  )  
}

const Cities = ({ cities, name }) => {
  const cityDetail = cities.find(city => city.name === name)
  return (
    <>
      <h2>City Details</h2>
      <p>Name: {cityDetail.name}</p>
      <p>Population: {cityDetail.population}</p>
    </>
  )
}

const Products = ({ products, id }) => {
  const productDetail = products.find(product => product.id === id)
  return (
    <>
      <h2>Product Details</h2>
      <p>Id: {productDetail.id}</p>
      <p>Name: {productDetail.name}</p>
      <p>Price: {productDetail.price}</p>
    </>
  )
}

const Students = ({ students, name }) => {
  const studentDetail = students.find(student => student.name === name)
  return (
    <>
      <h2>Student details</h2>
      <p>Name: {studentDetail.name}</p>
      <p>Age: {studentDetail.age}</p>
      <p>Math Grade: {studentDetail.grades.math}</p>
      <p>Science Grade: {studentDetail.grades.science}</p>
      <p>English grade: {studentDetail.grades.english}</p>
    </>
  )
}

const Orders = ({ orders, customer }) => {
  const orderDetail = orders.find(order => order.customer === customer)
  return (
    <>
      <h2>Order Details</h2>
      <p>Customer: {orderDetail.customer}</p>
      <p>Total Amount: {orderDetail.totalAmount}</p>
      {orderDetail.products.map(product => (
      <div key={product.id}>
        <p>Id: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
      ))}
    </>
  )
}

const Employees = ({ employees, id }) => {
  const employeeDetail = employees.find(employee => employee.id === id)
  return (
    <>
      <h2>Employee Details</h2>
      <p>Id: {employeeDetail.id}</p>
      <p>Name: {employeeDetail.name}</p>
      <p>Position: {employeeDetail.position}</p>
      <p>Department Name: {employeeDetail.department.name}</p>
      <p>Department Location: {employeeDetail.department.location}</p>
    </>
  )
}

const TotalItemsInStock = ({ store }) => {
  const inStockItems = store.categories.filter(category => category.itemDetail.inStock)

  const totalInStock = inStockItems.length
  
  const displayStockedItems = inStockItems.map(item => (
    <div>
      <h2>Id: {item.id}</h2>
      <p>Name: {item.name}</p>
      <p>Item Id: {item.itemDetail.id}</p>
      <p>Product: {item.itemDetail.product}</p>
      <p>In Stock: {item.itemDetail.inStock ? 'Yes' : 'No'}</p>
    </div>
  ))
  return (
    <>
      <h2>Items In Stock: {totalInStock}</h2>
      {displayStockedItems}
    </>
  )
}

export default function App() {

  const exercises = [
  { id: 1, name: "Running", caloriesBurned: 300 },
  { id: 2, name: "Cycling", caloriesBurned: 200 },
  { id: 3, name: "Swimming", caloriesBurned: 400 },
];

  const songs = [
  { id: 1, title: "Song A", duration: 180, rating: 4.2 },
  { id: 2, title: "Song B", duration: 210, rating: 3.8 },
  { id: 3, title: "Song C", duration: 150, rating: 4.5 },
];

  const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
];
  const songs2 = [
  { id: 1, title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" },
  { id: 2, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
  { id: 3, title: "Rolling in the Deep", artist: "Adele", genre: "Pop" },
];

  const cities = [
  { id: 1, name: "New York", population: 8500000 },
  { id: 2, name: "Paris", population: 2200000 },
  { id: 3, name: "Tokyo", population: 3770000 },
];

  const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 60 },
];

  const students = [
  { id: 1, name: "Alice", age: 20, grades: { math: 90, science: 85, english: 92 } },
  { id: 2, name: "Bob", age: 22, grades: { math: 78, science: 80, english: 85 } },
  { id: 3, name: "Charlie", age: 21, grades: { math: 95, science: 88, english: 94 } },
];

  const orders = [
  { id: 1, customer: "John Doe", totalAmount: 150, products: [{ id: 101, name: "Widget", quantity: 2 }, { id: 102, name: "Gadget", quantity: 1 }] },
  { id: 2, customer: "Alice Smith", totalAmount: 200, products: [{ id: 103, name: "Tool", quantity: 1 }, { id: 104, name: "Device", quantity: 3 }] },
  { id: 3, customer: "Bob Johnson", totalAmount: 100, products: [{ id: 105, name: "Accessory", quantity: 5 }] },
];

  const employees = [
  { id: 1, name: "Jane Doe", position: "Software Engineer", department: { name: "Engineering", location: "Building A" } },
  { id: 2, name: "Sam Smith", position: "Marketing Manager", department: { name: "Marketing", location: "Building B" } },
  { id: 3, name: "Mike Johnson", position: "HR Specialist", department: { name: "Human Resources", location: "Building C" } },
];

  const store = {
  name: "Tech Emporium",
  categories: [
    { id: 1, name: "Electronics", itemDetail: { id: 101, product: "Laptop", inStock: true } },
    { id: 2, name: "Accessories", itemDetail: { id: 201, product: "Headphones", inStock: true } },
    { id: 3, name: "Electronics", itemDetail: { id: 301, product: "Heater", inStock: false } },
  ]
};
  
  return (
    <main>
      <TotalCalorieBurned exercises={exercises} />
      <hr />
      <TotalSongDuration songs={songs} />
      <hr />
      <Books books={books} title="The Great Gatsby" />
      <hr />
      <Songs songs2={songs2} title="Bohemian Rhapsody" />
      <hr />
      <Cities cities={cities} name="Paris" />
      <hr />
      <Products products={products} id={3} />
      <hr />
      <Students students={students} name="Charlie" />
      <hr />
      <Orders orders={orders} customer="Alice Smith" />
      <hr />
      <Employees employees={employees} id={1} />
      <hr />
      <TotalItemsInStock store={store} />
    </main>
  )
}
