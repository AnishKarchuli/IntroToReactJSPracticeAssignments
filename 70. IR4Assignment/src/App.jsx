import { useState } from 'react'

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscription, setSubscription] = useState("");
  const [interests, setInterests] = useState([]);
  const [updates, setUpdates] = useState("");
  const [comments, setComments] = useState("");
  const [formData, setFormData] = useState(null)
  
  const interestsHandler = (event) => {
      const {value, checked} = event.target;
    if(checked){
      setInterests((prevInterests) => [...prevInterests, value])
    } else {
      setInterests((prevInterests) => prevInterests.filter(interest => interest !== value))
    }
  }

  const formHandler = (event) => {
    event.preventDefault();
    if(name && email && subscription && interests.length > 0 && updates){
      setFormData({
        name,
        email,
        subscription,
        interests,
        updates,
        comments: comments || "none",
      })
    }
  }
  
  return (
    <main>
      <h1>Subscription Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor='nameInput'>Full Name:</label>
        <input type='text' id='nameInput' onChange={(event) => setName(event.target.value)} required />
        <br /><br />
        <label htmlFor='emailInput'>Email:</label>
        <input type='email' id='emailInput' onChange={(event) => setEmail(event.target.value)} required />
        <br /><br />
        <label htmlFor='subscriptionSelect'>Subscription Plan:</label>
        <select id='subscriptionSelect' onChange={(event) => setSubscription(event.target.value)} required>
          <option value="">Select Plan</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Ultimate">Ultimate</option>
        </select>
        <br /><br />
        <label>Interests:</label>
        <br />
        <input type='checkbox' value="Technology" onChange={interestsHandler} required /> Technology
        <br />
        <input type='checkbox' value="Fitness" onChange={interestsHandler} /> Fitness
        <br />
        <input type='checkbox' value="Cooking" onChange={interestsHandler} /> Cooking
        <br /> <br />
        <label>Want to Receive Updates:</label>
        <br />
        <input type='radio' value="Yes" onChange={(event) => setUpdates(event.target.value)} required /> Yes
        <br />
        <input type='radio' value="No" onChange={(event) => setUpdates(event.target.value)} /> No
        <br /><br />
        <label>Comments:</label>
        <br />
        <textarea id='commentsTextarea' rows={4} cols={40} onChange={(event) => setComments(event.target.value)}></textarea>;
        <br /> <br />
        <button type='submit'>Subscripe</button>
      </form>

      {formData && 
        <div>
          <p>Full Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Subscription Plan: {formData.subscription}</p>
          <p>Interests: {formData.interests.join(", ")}</p>
          <p>Want to receive updates: {formData.updates}</p>
          <p>Comments: {formData.comments || 'none'}</p>
        </div>
      }
      
    </main>
  )
}
