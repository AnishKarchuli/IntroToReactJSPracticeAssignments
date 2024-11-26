import { useState } from 'react'

const FavoriteMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleMovieCheckbox = (event) => {
    const { value, checked } = event.target;

    if(checked){
      setSelectedMovies((prevMovies) => [...prevMovies, value])
    } else {
      setSelectedMovies((prevMovies) => prevMovies.filter(movie => movie !== value))
    }
  }
  
  return (
    <div>
      <p>Choose your favorite movies:</p>
      <input type='checkbox' value="action" onChange={handleMovieCheckbox} /> Action <br />
      <input type='checkbox' value="comedy" onChange={handleMovieCheckbox} /> Comedy <br />
      <input type='checkbox' value="drama" onChange={handleMovieCheckbox} /> Drama <br />
      {selectedMovies.length > 0 && <p>Selected movies: {selectedMovies.join(", ")}</p>} 
    </div>
  )
}

const FavoriteFruits = () => {
  const [selectedFruits, setSelectedFruits] = useState("")

  const handleFruitCheckbox = (event) => {
    const { value, checked } = event.target;

    if(checked){
      setSelectedFruits((prevFruits) => [...prevFruits, value])
    } else {
      setSelectedFruits((prevFruits) => prevFruits.filter(fruit => fruit !== value))
    }
  }
  return (
    <div>
      <p>Choose your favorite fruits:</p>
      <input type='checkbox' value="apple" onChange={handleFruitCheckbox} /> Apple <br />
      <input type='checkbox' value="banana" onChange={handleFruitCheckbox} /> Banana <br />
      <input type='checkbox' value="orange" onChange={handleFruitCheckbox} /> Orange <br />
      {selectedFruits.length > 0 && <p>Selected fruits: {selectedFruits.join(", ")}</p>}
    </div>
  )
}

const FavoriteDrinks = () => {
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  const handleDrinkCheckbox = (event) => {
    const { value, checked } = event.target;

    if(checked){
      setSelectedDrinks((prevDrinks) => [...prevDrinks, value])
    } else {
      setSelectedDrinks((prevDrinks) => prevDrinks.filter(drink => drink !== value))
    }
  }

  return (
    <div>
      <p>Choose your favorite drinks:</p>
      <input type='checkbox' value="coffee" onChange={handleDrinkCheckbox} /> Coffee <br />
      <input type='checkbox' value="tea" onChange={handleDrinkCheckbox} /> Tea <br />
      <input type='checkbox' value="juice" onChange={handleDrinkCheckbox} /> Juice <br />
      {selectedDrinks.length > 0 && <p>Selected drinks: {selectedDrinks.join(", ")}</p>}
    </div>
  )
}

const FavoriteDesserts = () => {
  const [selectedDesserts, setSelectedDesserts] = useState("");

  const handleDessertCheckbox = (event) => {
    const { value, checked } = event.target;

    if(checked){
      setSelectedDesserts((prevDesserts) => [...prevDesserts, value])
    } else {
      setSelectedDesserts((prevDesserts) => prevDesserts.filter(dessert => dessert !== value))
    }
  }
  return (
    <div>
      <p>Choose your favorite desserts:</p>
      <input type='checkbox' value="cake" onChange={handleDessertCheckbox} /> Cake <br />
      <input type='checkbox' value="icecream" onChange={handleDessertCheckbox} /> Ice Cream <br />
      <input type='checkbox' value="pie" onChange={handleDessertCheckbox} /> Pie <br />
      {selectedDesserts.length > 0 && <p>Selected desserts: {selectedDesserts.join(", ")}</p>}
    </div>
  )
}

const FavoriteBookGenres = () => {
  const [selectedBookGenres, setSelectedBookGenres] = useState([]);

  const handleGenreCheckbox = (event) => {
    const { value, checked } = event.target;

    if(checked){
      setSelectedBookGenres((prevGenres) => [...prevGenres, value])
    } else {
      setSelectedBookGenres((prevGenres) => prevGenres.filter(genre => genre !== value))
    }
  }
  return (
    <div>
      <p>Choose your favorite book genres:</p>
      <input type='checkbox' value="fiction" onChange={handleGenreCheckbox} /> Fiction <br />
      <input type='checkbox' value="mystery" onChange={handleGenreCheckbox} /> Mystery <br />
      <input type='checkbox' value="biography" onChange={handleGenreCheckbox} /> Biography <br />
      {selectedBookGenres.length > 0 && <p>Selected genres: {selectedBookGenres.join(", ")}</p>}
    </div>
  )
}


export default function App() {
  return (
    <main>
      <FavoriteMovies />
      <FavoriteFruits />
      <FavoriteDrinks />
      <FavoriteDesserts />
      <FavoriteBookGenres />
    </main>
  )
}
