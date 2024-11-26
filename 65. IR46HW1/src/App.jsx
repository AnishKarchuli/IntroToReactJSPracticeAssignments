import { useState } from 'react'

const MusicalInstrumentSelect = () => {
  const [instrument, setInstrument] = useState("");

  const instrumentSelectHandler = (event) => {
    setInstrument(event.target.value);
  }
  
  return (
    <div>
      <label htmlFor='instrumentSelect'>Select a musical instrument: </label>
      <select id='instrumentSelect' onChange={instrumentSelectHandler}>
        <option value="Guitar">Guitar</option>
        <option value="Piano">Piano</option>
        <option value="Drums">Drums</option>
      </select>
      <p>Type: {instrument}</p>
    </div>
  )
}

const LanguageSelect = () => {
  const [language, setLanguage] = useState("");

  const languageSelectHandler = (event) => {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <label htmlFor='languageSelect'>Select a language: </label>
      <select id='languageSelect' onChange={languageSelectHandler}>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Spanish">Spanish</option>
      </select>
      {language && <p>Origin: {language}</p>}
    </div>
  )
}

const CarBrandSelect = () => {
  const [brand, setBrand] = useState("");

  const brandSelectHandler = (event) => {
    setBrand(event.target.value);
  }
  
  return (
    <div>
      <label htmlFor='brandSelect'>Select a car brand: </label>
      <select id='brandSelect' onChange={brandSelectHandler}>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Tesla">Tesla</option>
      </select>
      <p>Details: {brand === "BMW" ? `${brand} - Bavarian Motor Works, a German multinational company.` : brand === "Tesla" ? `${brand} - American electric vehicle and clean energy company.` : brand === "Audi" ? `${brand} - German luxury automobile manufacturer.` : ""}</p>
    </div>
  )
}

const ContinentSelect = () => {
  const [continent, setContinent] = useState("");

  const continentSelectHandler = (event) => {
    setContinent(event.target.value);
  }
  
  return (
    <div>
      <label htmlFor='continentSelect'>Select a continent: </label>
      <select id='continentSelect' onChange={continentSelectHandler}>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>
      <p>Details: { continent === "Asia" ? `${continent} - The largest continent by land area and population` : continent === "Africa" ? `${continent} - The second largest and second most populous continent` : continent === "Europe" ? `${continent} - The third most populous continent` : ""}</p>
    </div>
  )
}

const MovieGenreSelect = () => {
  const [genre, setGenre] = useState("");

  const genreSelectHandler = (event) => {
    setGenre(event.target.value);
  }
  
  return (
    <div>
      <label htmlFor='genreSelect'>Select a movie genre: </label>
      <select id='genreSelect' onChange={genreSelectHandler}>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>
      <p>Description: {genre === "Comedy" ? `${genre} - Films intended to make the audiance laugh` : genre === "Drama" ? `${genre} - Films with serious themes and emotions` : genre === "Action" ? `${genre} - Films with exciting and fast-paced sequences` : ""}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <MusicalInstrumentSelect />
      <LanguageSelect />
      <br />
      <CarBrandSelect />
      <ContinentSelect />
      <MovieGenreSelect />
    </main>
  )
}
