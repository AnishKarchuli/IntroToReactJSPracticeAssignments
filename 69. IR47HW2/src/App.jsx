import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState([]);
  const [type, setType] = useState("");
  const [delivery, setDelivery] = useState("");
  const [instructions, setInstructions] = useState("");
  const [formData, setFormData] = useState(null);

  const toppingsHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setToppings((prevToppings) => [...prevToppings, value]);
    } else {
      setToppings((prevToppings) =>
        prevToppings.filter((topping) => topping !== value),
      );
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (name && size && toppings.length > 0 && type && delivery) {
      setFormData({
        name,
        size,
        toppings,
        type,
        delivery,
        instructions: instructions || "none",
      });
    }
  };

  return (
    <main>
      <h1>Pizza Order Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="nameInput">Customer Name:</label>
        <input
          type="text"
          id="nameInput"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br /> <br />
        <label htmlFor="pizzaSizeSelect">Choose Pizza Size:</label>
        <select
          id="pizzaSizeSelect"
          onChange={(event) => setSize(event.target.value)}
          required
        >
          <option value="">Select Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <br />
        <br />
        <label>Choose Toppings:</label>
        <br />
        <input
          type="checkbox"
          value="pepperoni"
          onChange={toppingsHandler}
          required
        />{" "}
        Pepperoni
        <br />
        <input
          type="checkbox"
          value="mushrooms"
          onChange={toppingsHandler}
        />{" "}
        Mushrooms
        <br />
        <input type="checkbox" value="olives" onChange={toppingsHandler} />{" "}
        Olives
        <br />
        <br />
        <label>Choose Crust Type:</label>
        <br />
        <input
          type="radio"
          value="thin"
          name="crustType"
          onChange={(event) => setType(event.target.value)}
          required
        />{" "}
        Thin
        <br />
        <input
          type="radio"
          value="thick"
          name="crustType"
          onChange={(event) => setType(event.target.value)}
        />{" "}
        Thick
        <br /> <br />
        <label>Choose Delivery Option:</label>
        <br />
        <input
          type="radio"
          value="pickup"
          name="delivery"
          onChange={(event) => setDelivery(event.target.value)}
          required
        />{" "}
        Pickup
        <br />
        <input
          type="radio"
          value="delivery"
          name="delivery"
          onChange={(event) => setDelivery(event.target.value)}
        />{" "}
        Delivery
        <br /> <br />
        <label htmlFor="instructionsTextarea">
          Special Instructions (if any):
        </label>
        <br />
        <textarea
          id="instructionsTextarea"
          rows={4}
          cols={40}
          onChange={(event) => setInstructions(event.target.value)}
        ></textarea>
        <br /> <br />
        <button type="submit">Place Order</button>
      </form>

      {formData && (
        <div>
          <p>Customer Name: {formData.name}</p>
          <p>Pizza Size: {formData.size}</p>
          <p>Toppings: {formData.toppings.join(", ")}</p>
          <p>Crust Type: {formData.type}</p>
          <p>Delivery Option: {formData.delivery}</p>
          <p>Special Instructions: {formData.instructions || 'none'}</p>
        </div>
      )}
    </main>
  );
}