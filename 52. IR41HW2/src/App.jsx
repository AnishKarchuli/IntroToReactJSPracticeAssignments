import { useState } from "react";
import "./App.css";

export default function App() {
  function DisplaySelectedImage() {
    const images = [
      "https://placehold.co/100?text=Image1",
      "https://placehold.co/100?text=Image2",
      "https://placehold.co/100?text=Image3",
    ];
    const [image, setImage] = useState(images[0]);

    return (
      <div>
        <div>
          <img src={image} alt="Selected Image" />
        </div>
        <div>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              onClick={() => setImage(img)}
              style={{ cursor: "pointer", width: "50px" }}
            />
          ))}
        </div>
      </div>
    );
  }

  function AddItem() {
    const [items, setItems] = useState([]);

    return (
      <div>
        <button
          onClick={() => setItems([...items, `Item ${items.length + 1}`])}
        >
          Add Item
        </button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  function BackgroundColorChange() {
    const colors = [
      "lightblue",
      "lightgreen",
      "lightpink",
      "lightyellow",
      "lightgray",
    ];

    const [backgroundColor, setBackgroundColor] = useState(colors[0]);
    return (
      <>
        <div
          style={{
            backgroundColor: `${backgroundColor}`,
            padding: 25,
          }}
        >
          <p>Background color is {backgroundColor}</p>
          <button
            onClick={() => {
              const currentIndex = colors.indexOf(backgroundColor);
              const nextIndex = (currentIndex + 1) % colors.length;
              setBackgroundColor(colors[nextIndex]);
            }}
          >
            Change Color
          </button>
        </div>
      </>
    );
  }

  function LoadingTogglerBtn() {
    const [loading, setLoading] = useState("Content has loaded.");
    return (
      <div>
        <p>{loading}</p>
        <button
          onClick={() =>
            setLoading(
              loading === "Content has loaded."
                ? "Loading..."
                : "Content has loaded.",
            )
          }
        >
          Toggle Loading
        </button>
      </div>
    );
  }

  function SelectItem() {
    const items = ["Item 1", "Item 2", "Item 3"];
    const [selectedItem, setSelectedItem] = useState(items[0]);
    return (
      <>
        {items.map((item, index) => (
        <p key={index} onClick={() => setSelectedItem(item)}>{item}</p>
        ))}
        <div>
          <p>Selected Item: {selectedItem}</p>
        </div>
      </>
    );
  }

  return (
    <div>
      <DisplaySelectedImage />
      <hr />
      <AddItem />
      <hr />
      <BackgroundColorChange />
      <hr />
      <LoadingTogglerBtn />
      <hr />
      <SelectItem />
    </div>
  );
}
