const GenerateGreeting = () => {
  const greeting = (name) => {
    return `Hello, ${name}!`
  }
  return (
    <h1>{greeting("John")}</h1>
  )
}

const length = 10
const width = 5

const CalculateArea = () => {  
  const area = () => {
    return length * width
  }
  return (
    <p>Rectangle Area: {area()}</p>
  )
}

const CalculatePerimeter = () => {
  const perimeter = () => {
    return (2 * length) + (2 * width)
  }
  return (
    <p>Rectangle Perimeter: {perimeter()}</p>
  )
}

const GenerateMessage = () => {
  const hours = new Date().getHours()
  const getMessage = () => {
    if(hours < 12){
      return "Good Morning!"
    } else if(hours < 18){
      return "Good Afternoon!"
    } else {
      return "Good Evening!"
    }
  }
  return (
    <h1>{getMessage()}</h1>
  )
}

const CalculateVolume = () => {
  const radius = 3
  const height = 5
  const getVolume = () => {
    return (Math.PI * radius * radius * height)
  }
  return (
    <p>Volume of Cylinder: {getVolume()}</p>
  )
}

export default function App() {
  return (
    <main>
      <GenerateGreeting />
      <CalculateArea />
      <CalculatePerimeter />
      <GenerateMessage />
      <CalculateVolume />
    </main>
  )
}