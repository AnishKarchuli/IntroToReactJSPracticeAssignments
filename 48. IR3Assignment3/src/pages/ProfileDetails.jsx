import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function () {
  const { username } = useParams();

  const userData = {
    john_doe: {
      fullName: "John Doe",
      bio: "Software Developer | Tech Enthusiast",
      imageUrl: "https://via.placeholder.com/250",
      followers: 1000,
      following: 500,
      posts: 50,
    },
    jane_smith: {
      fullName: "Jane Smith",
      bio: "Graphic Designer | Nature Lover",
      imageUrl: "https://via.placeholder.com/250",
      followers: 800,
      following: 300,
      posts: 40,
    },
    alice_wonder: {
      fullName: "Alice Wonder",
      bio: "Travel Blogger | Foodie",
      imageUrl: "https://via.placeholder.com/150",
      followers: 1200,
      following: 600,
      posts: 60,
    },
  };

  const user = userData[username];

  return (
    <>
      <Header />
      <main className="container py-3">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="col-md-4">
              <img
                src={user.imageUrl}
                alt={user.fullName}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h5 className="fw-semibold">{user.fullName}</h5>
              <p>@{username}</p>
              <p>{user.bio}</p>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
              <p>Posts: {user.posts}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
