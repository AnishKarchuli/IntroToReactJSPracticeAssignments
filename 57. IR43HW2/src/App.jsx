import { useState } from "react";
import "./App.css";

const TakeSurvey = () => {
  const [survey, setSurvey] = useState("");

  const handleSurveyTextarea = (event) => {
    setSurvey(event.target.value);
  };

  const surveyHandler = () => {
    alert(`Survey response: ${survey}`);
  };

  return (
    <div>
      <label htmlFor="surveyTextarea">Take the survey:</label>
      <textarea
        id="surveyTextarea"
        cols={40}
        rows={3}
        onChange={handleSurveyTextarea}
      ></textarea>
      <button onClick={surveyHandler}>Submit Survey</button>
    </div>
  );
};

const Recipe = () => {
  const [recipe, setRecipe] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const handleRecipeTextarea = (event) => {
    setRecipe(event.target.value);
  };

  const recipeHandler = () => {
    const separatedReceipe = recipe.split(". ");
    setRecipeList(separatedReceipe);
  };

  return (
    <div>
      <label htmlFor="recipeTextarea">Enter your recipe:</label>
      <textarea
        id="recipeTextarea"
        cols={40}
        rows={3}
        value={recipe}
        onChange={handleRecipeTextarea}
      ></textarea>
      <button onClick={recipeHandler}>Save Recipe</button>
      {recipeList.length > 0 && (
        <ol>
          {recipeList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

const Diary = () => {
  const [diary, setDiary] = useState("");
  const [displayDiary, setDisplayDiary] = useState("");

  const handleDiaryEntry = (event) => {
    setDiary(event.target.value);
  };

  const diaryHandler = () => {
    setDisplayDiary(diary);
  };

  return (
    <div>
      <label htmlFor="diaryTextarea">Write your diary entry:</label>
      <textarea
        id="diaryTextarea"
        cols={40}
        rows={3}
        onChange={handleDiaryEntry}
      ></textarea>
      <button onClick={diaryHandler}>Save Diary Entry</button>
      {displayDiary && (
        <p>
          <em>{displayDiary}</em>
        </p>
      )}
    </div>
  );
};

const Story = () => {
  const [story, setStory] = useState("");
  const [displayStory, setDisplayStory] = useState("");

  const handleStoryTextarea = (event) => {
    setStory(event.target.value);
  };

  const submitStoryHandler = () => {
    setDisplayStory(story);
  };

  return (
    <div>
      <label htmlFor="storyTextarea">Share your story:</label>
      <textarea
        id="storyTextarea"
        cols={40}
        rows={3}
        onChange={handleStoryTextarea}
      ></textarea>
      <button onClick={submitStoryHandler}>Submit Story</button>
      {displayStory && <p>Your story: {displayStory}</p>}
    </div>
  );
};

const Items = () => {
  const [items, setItems] = useState("");
  const [displayItems, setDisplayItems] = useState([]);

  const handleItemsTextarea = (event) => {
    setItems(event.target.value);
  };

  const displayItemsHandler = () => {
    const separatedItems = items.split(", ");
    setDisplayItems(separatedItems);
  };

  return (
    <div>
      <label htmlFor="itemsTextarea">Enter a list of items:</label>
      <textarea
        id="itemsTextarea"
        cols={40}
        rows={3}
        value={items}
        onChange={handleItemsTextarea}
      ></textarea>
      <button onClick={displayItemsHandler}>Display Items</button>
      {displayItems.length > 0 && (
        <ul>
          {displayItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default function App() {
  return (
    <main>
      <h3>Text Area Programs</h3>
      <TakeSurvey />
      <br />
      <Recipe />
      <br />
      <Diary />
      <br />
      <Story />
      <br />
      <Items />
    </main>
  );
}
