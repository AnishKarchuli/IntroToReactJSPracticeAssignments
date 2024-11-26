import { useState } from 'react'

const ProgLangProficiency = () => {
  const [proficiency, setProficiency] = useState("");

  const proficiencyHandler = (event) => {
    setProficiency(event.target.value);
  }
  
  return (
    <div>
      <form onChange={proficiencyHandler}>
        <label>Select your proficiency in a programming language:</label>
        <br />
        <input type='radio' value="beginner" name='proficiency' /> Beginner
        <br />
        <input type='radio' value="intermediate" name='proficiency' /> Intermediate
        <br />
        <input type='radio' value="advanced" name='proficiency' /> Advanced
      </form>
      <p>Selected proficiency level: {proficiency}</p>
    </div>
  )
}

const DreamTravelDestination = () => {
  const [destination, setDestination] = useState("");

  const travelDestinationHandler = (event) => {
    setDestination(event.target.value);
  }
  return (
    <div>
      <form onChange={travelDestinationHandler}>
        <label>Select your dream travel destination:</label>
        <br />
        <input type='radio' value="beach" name='destination' /> Beach
        <br />
        <input type='radio' value="mountain" name="destination" /> Mountain
        <br />
        <input type='radio' value="city" name='destination' /> City
      </form>
      <p>Selected travel destination: {destination}</p>
    </div>
  )
}

const CoffeePreference = () => {
  const [coffee, setCoffee] = useState("");

  const coffeePreferenceHandler = (event) => {
    setCoffee(event.target.value);
  }
  
  return (
    <div>
      <form onChange={coffeePreferenceHandler}>
        <label>Select your coffee preference:</label>
        <br />
        <input type='radio' value="black coffee" name='coffee' /> Black Coffee
        <br />
        <input type='radio' value="latte" name='coffee' /> Latte
        <br />
        <input type='radio' value="cappuccino" name='coffee' /> Cappuccino
      </form>
      <p>Selected coffee preference: {coffee}</p>
    </div>
  )
}

const PetPreference = () => {
  const [pet, setPet] = useState("");

  const petHandler = (event) => {
    setPet(event.target.value);
  }
  
  return (
    <div>
      <form onChange={petHandler}>
        <label>Select your preferred pet:</label>
        <br />
        <input type='radio' value="dog" name='pet' /> Dog
        <br />
        <input type='radio' value="cat" name='pet' /> Cat
        <br />
        <input type='radio' value="fish" name='pet' /> Fish
      </form>
      <p>Selected pet: {pet}</p>
    </div>
  )
}

const FavoriteSport = () => {
  const [sport, setSport] = useState("");

  const favoriteSportHandler = (event) => {
    setSport(event.target.value);
  }
  return (
    <div>
      <form onChange={favoriteSportHandler}>
        <label>Select your favorite sport:</label>
        <br />
        <input type='radio' value="football" name='sport' /> Football
        <br />
        <input type='radio' value="basketball" name='sport' /> Basketball
        <br />
        <input type='radio' value="tennis" name='sport' /> Tennis
      </form>
      <p>Selected sport: {sport}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <ProgLangProficiency />
      <DreamTravelDestination />
      <CoffeePreference />
      <PetPreference />
      <FavoriteSport />
    </main>
  )
}
