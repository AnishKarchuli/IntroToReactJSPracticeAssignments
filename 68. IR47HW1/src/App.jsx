import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("");
  const [usage, setUsage] = useState("");
  const [comments, setComments] = useState("");
  const [experience, setExperience] = useState("");
  const [formData, setFormData] = useState(false);

  const formHandler = (event) => {
    event.preventDefault();
    if (mode && usage && experience) {
      setFormData(true);
    }
  };

  return (
    <main>
      <h1>Transportation Preference Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="transModeSelect">
          Preferred Mode of Transportation:{" "}
        </label>
        <select
          id="transModeSelect"
          onChange={(event) => setMode(event.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
          <option value="Bicycle">Bicycle</option>
          <option value="Walk">Walk</option>
        </select>
        <br />
        <br />
        <label htmlFor="usageSelect">Frequency of Usage:</label>
        <select
          id="usageSelect"
          onChange={(event) => setUsage(event.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Occasionally">Occasionally</option>
        </select>
        <br /> <br />
        <label htmlFor="commentsTextarea">Comments (if any):</label>
        <br />
        <textarea
          id="commentsTextarea"
          rows={4}
          cols={40}
          onChange={(event) => setComments(event.target.value)}
        ></textarea>
        <br />
        <br />
        <label>Experience Level:</label>
        <br />
        <input
          type="radio"
          value="Beginner"
          name="experience"
          required
          onChange={(event) => setExperience(event.target.value)}
        />{" "}
        Beginner
        <br />
        <input
          type="radio"
          value="Intermediate"
          name="experience"
          onChange={(event) => setExperience(event.target.value)}
        />{" "}
        Intermediate
        <br />
        <input
          type="radio"
          value="Advanced"
          name="experience"
          onChange={(event) => setExperience(event.target.value)}
        />{" "}
        Advanced
        <br /> <br />
        <input type="checkbox" required /> I
        agree to the terms and conditions.
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div>
          <h2>Submitted Details:</h2>
          <p>Preferred Mode of Transportation: {mode}</p>
          <p>Frequency of Usage: {usage}</p>
          <p>Comments: {comments}</p>
          <p>Experience Level: {experience}</p>
        </div>
      )}
    </main>
  );
}