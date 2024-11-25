const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5];
  const reverseArray = () => {
    return [...originalArray].reverse().join(", ");
  };
  return (
    <div>
      <h2>Reverse Array</h2>
      <p>Reversed Array: {reverseArray()}</p>
    </div>
  );
};

const CalculateBMI = () => {
  const weight = 70;
  const height = 1.75;
  const getBMI = () => {
    return (weight / height ** 2).toFixed(2);
  };
  return (
    <>
      <h2>BMI Calculator</h2>
      <p>BMI: {getBMI()}</p>
    </>
  );
};

const GenerateQuote = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  ];
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  return (
    <>
      <h2>Random Quote</h2>
      <p>{getRandomQuote()}</p>
    </>
  );
};

const GradeAnalyser = ({ score }) => {
  const getGradeAndMessage = (score) => {
    let grade, message;
    if (score >= 90 && score <= 100) {
      (grade = "A"), (message = "Excellent work!");
    } else if (score >= 80 && score <= 89){
      (grade = "B"), (message = "Good job!")
    } else if (score >= 70 && score <= 79){
      (grade = "C"), (message = "Not bad, keep it up!")
    } else if (score >= 60 && score <= 69){
      (grade = "D"), (message = "You passed, but aim higher next time.")
    } else {
      (grade = "F"), (message = "Sorry, you didn't pass. Keep working hard!")
    }
    return {grade, message}
  };

  const {grade, message} = getGradeAndMessage(score)
  
  return (
    <>
      <h2>Grade Analyzer</h2>
      <p>Score: {score}</p>
      <p>Grade: {grade}</p>
      <p>{message}</p>
    </>
  ) 
};

const TemperatureFeedback = ({ temp }) => {
  const getFeedback = (temp) => {
    let feedback;
    if(temp < 0){
      feedback = "Brr, it's freezing!"
    } else if(temp >= 0 && temp < 10){
      feedback = "It's quite cold, bundle up!" 
    } else if (temp >= 10 && temp < 20){
      feedback = "The weather is cool and comfortable."
    } else if (temp >= 20 && temp < 30){
      feedback = "It's a warm day!"
    } else {
      feedback = "Is's hot outside, stay cool!"
    }
    return feedback
  }
  return (
    <>
      <h2>Temperature Feedback</h2>
      <p>Current Temperature: {temp} degree celsius</p>
      <p>{getFeedback(temp)}</p>
    </>
  )
}

export default function App() {
  return (
    <main>
      <ReverseArray />
      <CalculateBMI />
      <GenerateQuote />
      <GradeAnalyser score={85} />
      <TemperatureFeedback temp={25} />
    </main>
  );
}
