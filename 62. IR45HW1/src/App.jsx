import { useState } from 'react'

const EducationLevel = () => {
  const [education, setEducation] = useState("");

  const educationLevelHandler = (event) => {
    setEducation(event.target.value);
  }
  
  return (
    <div>
      <form onChange={educationLevelHandler}>
        <label>Choose your highest education level:</label>
        <br />
        <input type='radio' value="high School" name='education' /> High School
        <br />
        <input type='radio' value="bachelors degree" name='education' /> Bachelor's Degree
        <br />
        <input type='radio' value="masters degree" name='education' /> Master's Degree
        <br />
        <input type='radio' value="Ph.D." name='education' /> Ph.D.
      </form>
      {education && <p>Education level: I have a {education}</p>}
    </div>
  )
}

const MusicGenrePreference = () => {
  const [genre, setGenre] = useState("");

  const musicGenreHandler = (event) => {
    setGenre(event.target.value);
  }
  return (
    <div>
      <form onChange={musicGenreHandler}>
        <label>Choose your favorite music genre:</label>
        <br />
        <input type='radio' value="pop" name='genre' /> Pop
        <br />
        <input type='radio' value="rock" name='genre' /> Rock
        <br />
        <input type='radio' value="hiphop" name='genre' /> Hip Hop
        <br />
        <input type='radio' value="classical" name='genre' /> Classical
      </form>
      {genre && <p> I like {genre} music.</p>}
    </div>
  )
}

const PaymentMethodPreference = () => {
  const [method, setMethod] = useState("");

  const paymentMethodHandler = (event) => {
    setMethod(event.target.value);
  }
  return (
    <div>
      <form onChange={paymentMethodHandler}>
        <label>Select your preferred payment method:</label>
        <br />
        <input type='radio' value="creditcard" name='paymentMethod' /> Credit Card
        <br />
        <input type='radio' value="paypal" name='paymentMethod' /> PayPal
        <br />
        <input type='radio' value="bitcoin" name='paymentMethod' /> Bitcoin
        <br />
        <input type='radio' value="cash" name='paymentMethod' /> Cash
      </form>
      {<p>Selected payment method: {method}</p>}
    </div>
  )
}

const WeatherPreference = () => {
  const [weather, setWeather] = useState("");

  const weatherPreferenceHandler = (event) => {
    setWeather(event.target.value);
  }
  return (
    <div>
      <form onChange={weatherPreferenceHandler}>
        <label>Choose your preferred weather:</label>
        <br />
        <input type='radio' value="sunny" name='weather' /> Sunny
        <br />
        <input type='radio' value="rainy" name='weather' /> Rainy
        <br />
        <input type='radio' value="cloudy" name='weather' /> Cloudy
        <br />
        <input type='radio' value="snowy" name='weather' /> Snowy
      </form>
      {weather && <p>Selected weather: I like {weather} weather.</p>}
    </div>
  )
}

const OccupationPreference = () => {
  const [occupation, setOccupation] = useState("");

  const occupationHandler = (event) => {
    setOccupation(event.target.value);
  }

  return (
    <div>
      <form onChange={occupationHandler}>
        <label>Choose your occupation:</label>
        <br />
        <input type='radio' value="student" name='occupation' /> Student
        <br />
        <input type='radio' value="teacher" name='occupation' /> Teacher
        <br />
        <input type='radio' value="engineer" name='occupation' /> Engineer
        <br />
        <input type='radio' value="doctor" name='occupation' /> Doctor
      </form>
      <p>Selected occupation: {occupation}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <EducationLevel />
      <br />
      <MusicGenrePreference />
      <br />
      <PaymentMethodPreference />
      <br />
      <WeatherPreference />
      <br />
      <OccupationPreference />
    </main>
  )
}
