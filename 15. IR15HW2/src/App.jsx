const RandomNumber = () => {
  const ranNum = Math.floor(Math.random() * 100) + 1
  return (
    <p>Random Number: {ranNum}</p>
  )
}

const AbsoluteValue = () => {
  const number = -10
  const absoluteValue = Math.abs(number)
  return (
    <p>Absolute Value: {absoluteValue}</p>
  )
}

const SumOfEvenNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7]
  const evenNum = numbers.filter(num => num % 2 === 0)
  const sumOfEven = evenNum.reduce((acc, curr) => acc + curr , 0)
  return (
    <p>Sum of even numbers: {sumOfEven}</p>
  )
}

const SquarePerimeter = () => {
  const side = 5
  const perimeter = side * 4
  return (
    <div>
      <h2>Square Perimeter Calculator</h2>
      <p>Side Length: {side} cm</p>
      <p>Perimeter: {perimeter} cm</p>
    </div>
  )
}

const CurrencyConverter = () => {
  const usd = 50
  const exchangeRate = 74.5
  const inr = usd * exchangeRate
  return (
    <div>
      <h2>Currency Converter</h2>
      <p>Amount in USD: ${usd}</p>
      <p>Exchange Rate: 1 USD = {exchangeRate} INR</p>
      <p>Amount in INR: INR {inr}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <RandomNumber />
      <AbsoluteValue />
      <SumOfEvenNumbers />
      <SquarePerimeter />
      <CurrencyConverter />
    </main>
  )
}
