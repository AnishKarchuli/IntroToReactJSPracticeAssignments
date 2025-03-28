import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StayDetails = () => {
  const { stayId } = useParams();

  const stays = [
    {
      id: 1,
      name: "Cozy Cottage Retreat",
      type: "Cottage",
      location: "Mountain View, CA",
      rating: 4.8,
      description: "Escape to a charming cottage nestled in the mountains.",
      amenities: ["Kitchen", "WiFi", "Parking"],
      price: "$150/night",
    },
    {
      id: 2,
      name: "Beachfront Paradise Villa",
      type: "Villa",
      location: "Maui, Hawaii",
      rating: 4.9,
      description: "Experience luxury living in a stunning beachfront villa",
      amenities: ["Private Pool", "Ocean View", "Fitness Center"],
      price: "$500/night",
    },
    {
      id: 3,
      name: "Urban Loft in the City",
      type: "Apartment",
      location: "New York City, NY",
      rating: 4.5,
      description:
        "Live in style in a modern loft apartment in the heart of the city.",
      amenities: ["Downtown Location", "Gym Access", "24/7 Security"],
      price: "$250/night",
    },
    {
      id: 4,
      name: "Rustic Cabin in the Woods",
      type: "Cottage",
      location: "Amsterdam, Neatherlands",
      rating: 4.6,
      description:
        "Experience urban living at its finest with this modern loft.",
      amenities: ["Swimming Pool", "Gym", "Laundry"],
      price: "$200/night",
    },
  ];

  const stayData = stays.find((stay) => stay.id === parseInt(stayId));

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container mt-3 mb-5 flex-grow-1">
        <h1>{stayData.name}</h1>
        <p>Type: {stayData.type}</p>
        <p>Location: {stayData.location}</p>
        <p>Rating: {stayData.rating}</p>
        <p>{stayData.description}</p>
        <hr />
        <h2 className="fw-semibold">Amenities</h2>
        <ul>
          {stayData.amenities.map((amenity) => (
            <li>{amenity}</li>
          ))}
        </ul>
        <p>Price: {stayData.price}</p>
      </main>
      <Footer />
    </div>
  );
};

export default StayDetails;
