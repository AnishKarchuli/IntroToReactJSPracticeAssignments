import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NavLink } from "react-router-dom";

export default function App() {

  const posts = [
    {
      id: 1,
      username: "john_doe",
      imgUrl: "https://placehold.co/400x200?text=Hello+World",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      username: "jane_smith",
      imgUrl: "https://placehold.co/400x200?text=Smiling+Jane",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      username: "alice_wonder",
      imgUrl: "https://placehold.co/400x200?text=Alice+In+Wonder+Park",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  
  return (
    <>
      <Header />
      <main className="container my-3">
        <h4>Posts</h4>
        <div className="row">
          {posts.map(post => (
            <div className="col-12 col-md-12" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <NavLink to={`/profile/${post.username}`}>{post.username}</NavLink>
                  <div>
                    <img src={post.imgUrl} alt={post.username} className="img-fluid" />
                  </div>
                  <p>{post.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
