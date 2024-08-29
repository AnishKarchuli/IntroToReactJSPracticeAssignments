import { useState } from 'react'
import './App.css'

const ValidatePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const handlePhoneNoInput = (event) => {
    setPhoneNumber(event.target.value);
  }
  const phoneNoValidationHandler = () => {
    const phoneNoLength = phoneNumber.length
    if(phoneNoLength === 10){
      alert("Valid phone number.")
    } else {
      alert("Invalid phone number. Please enter 10 digits.")
    }
  }
  return (
    <div>
      <label for='phoneNumberInput'>Enter your phone number:</label>
      <input id='phoneNumberInput' onChange={handlePhoneNoInput} />
      <button onClick={phoneNoValidationHandler}>Validate Phone Number</button>
    </div>
  )
}

const ValidatePassword = () => {
  const [password, setPassword] = useState('')
  const handlePasswordInput = (event) => {
    setPassword(event.target.value)
  }
  const passwordStrengthHandler = () => {
    const passwordLength = password.length
    if(passwordLength <= 8){
      alert('Password strength: weak')
    } else {
      alert('Password strength: strong')
    }
  }
  
  return (
    <div>
      <label for='passwordInput'>Enter your password:</label>
      <input id='passwordInput' type='password' onChange={handlePasswordInput} />
      <button onClick={passwordStrengthHandler}>Check Password Strength</button>
    </div>
  )
}

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('')
  const handleBirthDate = (event) => {
    setBirthDate(event.target.value)
  }
  const ageHandler = () => {
    const currentDate = new Date();
    const birthDateObj = new Date(birthDate)
    const age = (currentDate.getFullYear() - birthDateObj.getFullYear())
    alert(`You are ${age} years old.`)
  }
  
  return (
    <div>
      <label for='dobInput'>Enter your birthdate:</label>
      <input type='date' id='dobInput' onChange={handleBirthDate} />
      <button onClick={ageHandler}>Calculate Age</button>
    </div>
  )
}

const DisplayColor = () => {
  const [color, setColor] = useState('')
  const [displayColor, setDisplayColor] = useState('')

  const handleColorInput = (event) => {
    setColor(event.target.value)
  }

  const displayColorHandler = () => {
    setDisplayColor(color)
  }
  
  return(
    <div>
      <label for='colorInput'>Enter your favorite color:</label>
      <input id='colorInput' onChange={handleColorInput} />
      <button onClick={displayColorHandler}>Display Color</button>
      {displayColor && <p>Your favorite color is {displayColor}</p>}
    </div>
  )
}

const SearchQuery = () => {
  const [search, setSearch] = useState('')
  const [displaySearch, setDisplaySearch] = useState('')

  const handleSearchInput = (event) => {
    setSearch(event.target.value)
  }

  const searchHandler = () => {
    setDisplaySearch(search)
  }
  
  return (
    <div>
      <label for='searchInput'>Enter your search query:</label>
      <input id='searchInput' onChange={handleSearchInput}/>
      <button onClick={searchHandler}>Search</button>
      {displaySearch && <p>Searching for: {displaySearch}</p>}
    </div>
  )
}

export default function App() {
  return (
    <main>
      <ValidatePhoneNumber />
      <br />
      <br />
      <ValidatePassword />
      <br />
      <br />
      <AgeCalculator />
      <br />
      <br />
      <DisplayColor />
      <br />
      <br />
      <SearchQuery />
    </main>
  )
}
