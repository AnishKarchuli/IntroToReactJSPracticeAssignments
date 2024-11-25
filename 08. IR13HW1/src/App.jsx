const WelcomeMessage = (props) => {
  return <h1>Welcome, {props.name}</h1>;
};

const BookDetails = (props) => {
  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Genre: {props.genre}</p>
    </div>
  )
}

const ArticleInformation = (props) => {
  return (
    <div>
      <h2>Article Information</h2>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Published Date: {props.publishedDate}</p>
    </div>
  )
}

const ProductDetails = (props) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: ${props.price}</p>
    </div>
  )
}

const EventDetails = (props) => {
  return (
    <div>
      <h2>Event Details</h2>
      <p>Title: {props.title}</p>
      <p>Location: {props.location}</p>
      <p>Date: {props.date}</p>
    </div>
  )
}

const UserProfile = (props) => {
  return (
    <div>
      <h2>User Profile</h2>
      <h3>Name: {props.name}</h3>
      <img src={props.img} />
    </div>
  )
}
export default function App() {
  return (
    <div>
      <WelcomeMessage name="Emily!" />
      <BookDetails title="To Kill a Mockingbird" author="Harper Lee" genre="Classic" />
      <ArticleInformation title="The Power of Habit" author="Charles Duhigg" publishedDate="March 1, 2024" />
      <ProductDetails name="Smartphone" brand="Samsung" price="799.99" />
      <EventDetails title="Tech Conference 2024" location="San Francisco" date="April 15, 2024" />
      <UserProfile name="Chris" img="https://via.placeholder.com/150" alt="placeholder" />
    </div>
  );
}
