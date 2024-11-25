const WelcomeBanner = (props) => {
  return <h1>Welcome to {props.appName} App!</h1>
}

const RecipeDetails = (props) => {
  return (
    <>
      <h2>Recipe Details</h2>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Rating: {props.rating}</p>
    </>
  )
}

const MovieInformation = (props) => {
  return (
    <>
      <h2>Movie Information</h2>
      <p>Title: {props.title}</p>
      <p>Director: {props.director}</p>
      <p>Release Date: {props.releaseYear}</p>
    </>
  )  
}

const ProductFeatures = (props) => {
  return (
    <>
      <h2>Product Features</h2>
      <p>Name: {props.name}</p>
      <p>Color: {props.color}</p>
      <p>Size: {props.size}</p>
      
    </>
  )
}

const UserProfileCard = (props) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </div>
  )
}
export default function App() {
  return (
    <div>
      <WelcomeBanner appName="My Recipe" />
      <RecipeDetails title="Chocolate Cake" author="Baker Betty" rating="4.7" />
      <MovieInformation title="The Godfather" director="Francis Ford Coppola" releaseYear="March 24, 1972" />
      <ProductFeatures name="Smartwatch" color="Black" size="Medium" />
      <UserProfileCard name="Alice" email="alice@example.com" role="Admin" />
    </div>
  )
}
