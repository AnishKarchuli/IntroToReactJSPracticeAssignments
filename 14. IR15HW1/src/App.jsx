import './App.css'

const ArrayOperations = () => {
  const numbers = [1, 2, 3, 4, 5]
  const sum = numbers.reduce((acc, curr) => acc + curr , 0)
  const avg = sum / numbers.length
  const maxNum = numbers.reduce((acc, curr) => curr > acc ? curr : acc , numbers[0])
  const minNum = numbers.reduce((acc, curr) => curr < acc ? curr : acc , numbers[0])
  return (
    <div>
      <h1>Array Operations</h1>
      <p>Sum: {sum}</p>
      <p>Average: {avg}</p>
      <p>Maximum: {maxNum}</p>
      <p>Minimum: {minNum}</p>
    </div>
  )
}

const ObjectManipulation = () => {
  const person = {
    name: "Sarah",
    age: 28,
    city: "New York"
  }
  person.age = 29
  return (
    <div>
      <h1>Person Details</h1>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
    </div>
  )
}

const SquareArea = () => {
  const sideLength = 5
  return (
    <div>
      <h1>Area of Square</h1>
      <p>The area of the square is: {sideLength ** 2}</p>
    </div>
  )
}

const CapitalizeString = () => {
  const string = "hello world"
  const capString = string.toUpperCase()
  return (
    <div>
      <h1>Capitalize Text</h1>
      <p>{capString}</p>
    </div>
  )
}

const CircleArea = () => {
  const radius = 8
  const area = (Math.PI * radius ** 2).toFixed(2)
  return (
    <div>
      <h1>Area of Circle</h1>
      <p>The area of the circle is: {area}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <ArrayOperations />
      <ObjectManipulation />
      <SquareArea />
      <CapitalizeString />
      <CircleArea />
    </main>
  )
}
