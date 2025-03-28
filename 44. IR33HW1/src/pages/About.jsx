import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container py-5 flex-grow-1">
        <h1>About Our Restaurants</h1>
        <p>
          Welcome to our restaurant guide! We are passionate about exploring and
          sharing culinary experiences from around the world. Our mission is to
          connect food lovers with the best dining options and unforgettable
          flavors.
        </p>
        <p>
          Our team of food enthusisats, chefs, and reviewers collaborates to
          curate a diverse collection of restaurant recommendations,
          highlighting the richness of global cuisines and the creativity of
          chefs.
        </p>
        <p>
          Join us as we emabark on a gastronorric journey, discovering hidden
          gems, iconic eateries, and innovative culinary trends. Wheather you're
          seasoned foodie or an adventurous diner, we invite you to explore,
          indulge, and savor the flavours of the world with us. Thank you for
          being part of our culinary community!
        </p>
      </main>
      <Footer />
    </div>
  );
}
