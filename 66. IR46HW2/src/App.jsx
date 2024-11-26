import { useState } from 'react'

const SizeSelect = () => {
  const [size, setSize] = useState("");

  const sizeSelectHandler = (event) => {
    setSize(event.target.value);
  }
  
  return (
    <div>
      <label htmlFor='sizeSelect'>Select a clothing size: </label>
      <select id='sizeSelect' onChange={sizeSelectHandler}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <p>Description: { size === "Small" ? `${size} - Fits chest size 34-36 inches` : size === "Medium" ? `${size} - Fits chest size 38-40 inches` : size === "Large" ? `${size} - Fits chest size 42-44 inches` : ""}</p>
    </div>
  )
}

const JobTypeSelect = () => {
  const [job, setJob] = useState("");

  const jobTypeSelectHandler = (event) => {
    setJob(event.target.value);
  }

  return (
    <div>
      <label htmlFor='jobTypeSelect'>Select a job type: </label>
      <select id='jobTypeSelect' onChange={jobTypeSelectHandler}>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
      </select>
      <p>Description: {job === "Full-time" ? `${job} - Employment for a standard 40-hour workweek` : job === "Part-time" ? `${job} - Employment for less than a standard workweek` : job === "Contract" ? `${job} - Temporary employment for a specific project or period` : ""}</p>
    </div>
  )
}

const MealTimeSelect = () => {
  const [time, setTime] = useState("");

  const mealTimeSelectHandler = (event) => {
    setTime(event.target.value);
  }
  
  return (
    <div>
      <label>Select a meal time: </label>
      <select id='mealTimeSelect' onChange={mealTimeSelectHandler}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <p>Description: {time === "Breakfast" ? `${time} - Morning meal typically eaten before starting the day` : time === "Lunch" ? `${time} - Midday meal typically eaten around noon` : time === "Dinner" ? `${time} - Evening meal typically eaten at the end of the day` : ""}</p>
    </div>
  )
}

const SkillSelect = () => {
  const [skill, setSkill] = useState("");

  const skillSelectHandler = (event) => {
    setSkill(event.target.value);
  }
  
  return (
    <div>
      <label htmlFor='skillSelect'>Select your skill level: </label>
      <select id='skillSelect' onChange={skillSelectHandler}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <p>Description: {skill === "Beginner" ? `${skill} - Just starting out, limited experience or knowledge` : skill === "Intermediate" ? `${skill} - Some experience or knowledge, moderate skill level` : skill === "Advanced" ? `${skill} - Extensive experience or knowledge, high skill level` : ""}</p>
    </div>
  )
}

const TempUnitSelect = () => {
  const [unit, setUnit] = useState("");

  const unitSelectHandler = (event) => {
    setUnit(event.target.value);
  }
  
  return (
    <div>
      <label htmlFor='unitSelect'>Select a temperature unit: </label>
      <select id='unitSelect' onChange={unitSelectHandler}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      <p>Description: {unit === "Celsius" ? `${unit} - Temperature scale in which water freezes at 0 degree and boils at 100 degrees` : unit === "Fahrenheit" ? `${unit} - Temperature scale widely used in the United States` : unit === "Kelvin" ? `${unit} - Absolute temperature scale with 0 representing absolute zero` : ""}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <SizeSelect />
      <JobTypeSelect />
      <MealTimeSelect />
      <SkillSelect />
      <TempUnitSelect />
    </main>
  )
}
