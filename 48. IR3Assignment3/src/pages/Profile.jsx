import Footer from "../components/Footer";
import Header from "../components/Header";

export default function () {
  const user = {
    fullName: "John Doe",
    bio: "Software Developer | Tech Enthusiast",
    imageUrl: "https://placehold.co/150",
    followers: 1000,
    following: 500,
    posts: 50,
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container py-3 flex-grow-1">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="col-md-4">
              <img src={user.imageUrl} alt="John Doe" className="img-fluid rounded-circle" />
            </div>
            <div className="col-md-8">
              <h5 className="fw-semibold">{user.fullName}</h5>
              <p>@</p>
              <p>{user.bio}</p>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
              <p>Posts: {user.posts}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
