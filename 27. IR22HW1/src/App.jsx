const FilteredCarList = ({ cars }) => {
  const filteredCars = cars.filter(car => car.price > 1500000 && car.price < 2000001)

  const carListing = filteredCars.map(car => (
    <div key={car.id}>
      <h3>Brand: {car.brand}</h3>
      <p>Price: {car.price}</p>
    </div>
  ))
  return (
    <>
      <h2>Cars</h2>
      {carListing}
    </>
  )
}

const FilteredCafeList = ({ cafes }) => {
  const filteredCafes = cafes.filter(cafe => cafe.type === "Coffee Shop")

  const cafeListing = filteredCafes.map(cafe => (
    <div key={cafe.id}>
      <h3>Name: {cafe.name}</h3>
      <p>Type: {cafe.type}</p>
    </div>
  ))
  return (
    <>
      <h2>Cafes</h2>
      {cafeListing}
    </>
  )
}

const FilteredTutorialList = ({ tutorials }) => {
  const filteredTutorials = tutorials.filter(tutorial => tutorial.views > 4000)

  const tutorialListing = filteredTutorials.map(tutorial => (
    <div key={tutorial.id}>
      <h3>Title: {tutorial.title}</h3>
      <p>Views: {tutorial.views}</p>
    </div>
  ))
  return (
    <>
      <h2>Tutorials</h2>
      {tutorialListing}
    </>
  )
}

const FilteredAlbumList = ({ albums }) => {
  const filteredAlbums = albums.filter(album => album.genre === "Pop")

  const albumListing = filteredAlbums.map(album => (
    <div key={album.id}>
      <h3>Title: {album.title}</h3>
      <p>Genre: {album.genre}</p>
    </div>
  ))
  return (
    <>
      <h2>Albums</h2>
      {albumListing}
    </>
  )
}

const FilteredEventList = ({ events }) => {
  const filteredEvents = events.filter(event => event.status === "Upcoming")

  const eventListing = filteredEvents.map(event => (
    <div key={event.id}>
      <h3>Name: {event.name}</h3>
      <p>Date: {event.date}</p>
      <p>Status: {event.status}</p>
    </div>
  ))
  return (
    <>
      <h2>Events</h2>
      {eventListing}
    </>
  )
}

const FilteredTaskList = ({ tasks }) => {
  const filteredTasks = tasks.filter(task => task.status === "Open")

  const taskListing = filteredTasks.map(task => (
    <div key={task.id}>
      <h3>Title: {task.title}</h3>
      <p>Description: {task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  ))
  return (
    <>
      <h2>Tasks</h2>
      {taskListing}
    </>
  )
}

export default function App() {
  
  const cars = [
    { id: 1, brand: "Toyota", price: 2000000 },
    { id: 2, brand: "Honda", price: 1800000 },
    { id: 3, brand: "Ford", price: 2500000 },
  ];
  
  const cafes = [
    { id: 1, name: "Coffee House", type: "Coffee Shop" },
    { id: 2, name: "Java Beans", type: "Café" },
    { id: 3, name: "Brew & Bake", type: "Coffee Shop" },
  ];

  const tutorials = [
    { id: 1, title: "React Basics", views: 7000 },
    { id: 2, title: "JavaScript Fundamentals", views: 4000 },
    { id: 3, title: "Node.js Crash Course", views: 8000 },
  ];

  const albums = [
    { id: 1, title: "Pop Sensation", genre: "Pop" },
    { id: 2, title: "Rhythm and Blues", genre: "R&B" },
    { id: 3, title: "Classic Rock Hits", genre: "Rock" },
  ];

  const events = [
    { id: 1, name: "Tech Conference", date: "2024-06-15", status: "Upcoming" },
    { id: 2, name: "Art Exhibition", date: "2024-07-20", status: "Upcoming" },
    { id: 3, name: "Music Festival", date: "2024-08-10", status: "Past" },
    { id: 4, name: "Dance Festival", date: "2023-09-12", status: "Past" },
  ];

  const tasks = [
    { id: 1, title: "Task 1", description: "Description 1", status: "Open" },
    { id: 2, title: "Task 2", description: "Description 2", status: "Closed" },
    { id: 3, title: "Task 3", description: "Description 3", status: "Open" },
    { id: 4, title: "Task 4", description: "Description 4", status: "Not Started" }
  ];
  
  return (
    <main>
      <FilteredCarList cars={cars} />
      <hr />
      <FilteredCafeList cafes={cafes} />
      <hr />
      <FilteredTutorialList tutorials={tutorials} />
      <hr />
      <FilteredAlbumList albums={albums} />
      <hr />
      <FilteredEventList events={events} />
      <hr />
      <FilteredTaskList tasks={tasks} />
    </main>
  )
}
