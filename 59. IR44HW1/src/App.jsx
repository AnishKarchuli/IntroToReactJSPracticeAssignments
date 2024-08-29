import { useState } from 'react'
import './App.css'

const FavoriteSports = () => {
  const [selectedSports, setSelectedSports] = useState([]);
  
  const handleSportCheckbox = (event) => {
    const { value, checked } = event.target;

    if(checked){
      setSelectedSports((prevSports) => [...prevSports, value])
    } else {
      setSelectedSports((prevSports) => prevSports.filter(sport => sport !== value))
    }
  }
  return (
    <div>
      <p>Choose your favorite sports:</p>
      <input type='checkbox' value="Football" onChange={handleSportCheckbox} /> Football <br />
      <input type='checkbox' value="Basketball" onChange={handleSportCheckbox} /> Basketball <br />
      <input type='checkbox' value="Tennis" onChange={handleSportCheckbox} /> Tennis <br />
      <input type='checkbox' value="Swimming" onChange={handleSportCheckbox} /> Swimming <br />
      {selectedSports.length > 0 && <p>Selected sports: {selectedSports.join(", ")}</p>}
    </div>
  )
}

const FavoriteColors = () => {
    const [selectedColors, setSelectedColors] = useState([]);

    const handleColorCheckbox = (event) => {
      const { value, checked } = event.target;

      if(checked){
        setSelectedColors((prevColors) => [...prevColors, value])
      } else {
        setSelectedColors((prevColors) => prevColors.filter(color => color !== value))
      }
    }

    return (
      <div>
        <p>Choose your favorite colors:</p>
        <input type='checkbox' value="Red" onChange={handleColorCheckbox} /> Red <br />
        <input type='checkbox' value="Blue" onChange={handleColorCheckbox} /> Blue <br />
        <input type='checkbox' value="Green" onChange={handleColorCheckbox} /> Green <br />
        <input type='checkbox' value="Yellow" onChange={handleColorCheckbox} /> Yellow <br />
        {selectedColors.length > 0 && <p>Selected colors: {selectedColors.join(", ")}</p>}
      </div>
    )
  }

const MusicalInstruments = () => {
  const [selectedInstruments, setSelectedInstruments] = useState([]);

  const handleInstrumentCheckbox = (event) => {
    const { value, checked } = event.target;

    if(checked){
      setSelectedInstruments((prevInstruments) => [...prevInstruments, value])
    } else {
      setSelectedInstruments((prevInstruments) => prevInstruments.filter(instrument => instrument !== value))
    }
  }
  
  return (
    <div>
      <p>Choose your musical instruments:</p>
      <input type='checkbox' value="Guitar" onChange={handleInstrumentCheckbox} /> Guitar <br />
      <input type='checkbox' value="Piano" onChange={handleInstrumentCheckbox} /> Piano <br />
      <input type='checkbox' value="Drums" onChange={handleInstrumentCheckbox} /> Drums <br />
      <p>Selected instruments: {selectedInstruments.join(", ")}</p>
    </div>
  )
}

const FavoriteAnimals = () => {
  const [selectedAnimals, setSelectedAnimals] = useState([]);

  const handleAnimalCheckbox = (event) => {
    const { value, checked } = event.target;

    if(checked){
      setSelectedAnimals((prevAnimals) => [...prevAnimals, value])
    } else {
      setSelectedAnimals((prevAnimals) => prevAnimals.filter(animal => animal !== value))
    }
  }

  return (
    <div>
      <p>Choose your favorite animals:</p>
      <input type='checkbox' value="Dog" onChange={handleAnimalCheckbox} /> Dog <br />
      <input type='checkbox' value="Cat" onChange={handleAnimalCheckbox} /> Cat <br />
      <input type='checkbox' value="Rabbit" onChange={handleAnimalCheckbox} /> Rabbit <br />
      <p>Selected animals: {selectedAnimals.join(", ")}</p>
    </div>
  )
}

const FavoriteCars = () => {
  const [selectedCars, setSelectedCars] = useState([]);

  const handleCarCheckbox = (event) => {
    const { value, checked } = event.target;

    if(checked){
      setSelectedCars((prevCars) => [...prevCars, value])
    } else {
      setSelectedCars((prevCars) => prevCars.filter(car => car !== value))
    }
  }
  return (
    <div>
      <p>Choose your favorite cars:</p>
      <input type='checkbox' value="Mercedes" onChange={handleCarCheckbox} /> Mercedes <br />
      <input type='checkbox' value="BMW" onChange={handleCarCheckbox} /> BMW <br />
      <input type='checkbox' value="Audi" onChange={handleCarCheckbox} /> Audi <br />
      <p>Selected cars: {selectedCars.join(", ")}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <FavoriteSports />
      <FavoriteColors />
      <MusicalInstruments />
      <FavoriteAnimals />
      <FavoriteCars />
    </main>
  )
}
