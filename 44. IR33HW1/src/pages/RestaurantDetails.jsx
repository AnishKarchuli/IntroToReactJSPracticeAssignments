import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();

  const restaurants = [
    {
      id: "1",
      name: "The Golden Spoon",
      cuisine: "Italian",
      location: "123 Main Street, Cityville",
      rating: 4.5,
      description: "Experience authentic Italian cuisine in a cozy atmosphere.",
      menu: [
        { name: "Spaghetti Carbonara", price: "$15" },
        { name: "Margherita Pizza", price: "$12" },
        { name: "Tiramisu", price: "$8" },
      ],
    },
    {
      id: "2",
      name: "Spice Junction",
      cuisine: "Indian",
      location: "456 Elm Street, Townsville",
      rating: 4.2,
      description: "Savor the flavours of India with our traditional dishes.",
      menu: [
        { name: "Chicken Tikka Masala", price: "$14" },
        { name: "Vegetable Biryani", price: "$12" },
        { name: "Gulab Jamun", price: "$6" },
      ],
    },
    {
      id: "3",
      name: "Sushi Delight",
      cuisine: "Japanese",
      location: "789 Oak Avenue, Villageland",
      rating: 4.7,
      description: "Enjoy exquisite Japanese sushi prepared by master chefs.",
      menu: [
        { name: "California Roll", price: "$10" },
        { name: "Sashimi Platter", price: "$18" },
        { name: "Green Tea Ice Cream", price: "$5" },
      ],
    },
  ];

  const restaurantData = restaurants.find(
    (restaurant) => restaurant.id === restaurantId,
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container mt-3 mb-5 flex-grow-1">
        <h1>{restaurantData.name}</h1>
        <p>Cuisine: {restaurantData.cuisine}</p>
        <p>Location: {restaurantData.location}</p>
        <p>Rating: {restaurantData.rating}</p>
        <p>{restaurantData.description}</p>
        <hr />
        <h2 className="fw-semibold">Menu</h2>
        <div className="row">
          {restaurantData.menu.map((menuItem) => (
            <div className="col-md-4">
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="fw-semibold">{menuItem.name}</h5>
                  <p>Price: {menuItem.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
