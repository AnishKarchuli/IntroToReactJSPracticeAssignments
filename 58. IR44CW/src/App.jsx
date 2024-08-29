import { useState } from 'react'
import './App.css'

const LanguageForm = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([])

  const handleLanguageCheckbox = (event) => {
    const { value, checked } = event.target
    if(checked){
      setSelectedLanguages((preValue) => [...preValue, value])
    } else {
      setSelectedLanguages((preValue) => preValue.filter(lang => lang != value))
    }
  }

  
  return (
    <div>
      <input type='checkbox' value="JavaScript" onChange={handleLanguageCheckbox} /> JavaScript
      <input type='checkbox' value="Python" onChange={handleLanguageCheckbox} /> Python
      <input type='checkbox' value="Java" onChange={handleLanguageCheckbox} /> Java
      <p>Selected Languages: {selectedLanguages.join(", ")}</p>
    </div>
  )
}

const MusicGenre = () => {
  const [musicGenre, setMusicGenre] = useState([])
  const handleMusicCheckbox = (event) => {
    const { value, checked } = event.target;

    if(checked){
      setMusicGenre((preGenre) => [...preGenre, value])
    } else {
      setMusicGenre((preGenre) => preGenre.filter(genre => genre != value))
    }
  }
  return (
    <div>
      <input type='checkbox' value="Rock" onChange={handleMusicCheckbox} /> Rock
      <input type='checkbox' value="Jazz" onChange={handleMusicCheckbox} /> Jazz
      <input type='checkbox' value="Pop" onChange={handleMusicCheckbox} /> Pop
      <p>Selected Music: {musicGenre.join(", ")}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <LanguageForm />
      <MusicGenre />
    </main>
  )
}
