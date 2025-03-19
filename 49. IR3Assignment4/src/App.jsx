import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container py-3 flex-grow-1">
        <div className="text-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVuJTIwYW5kJTIwcGFwZXIlMjB0b2Rvc3xlbnwwfHwwfHx8MA%3D%3D"
            className="img-fluid"
            alt="Todos"
          />
        </div>
        <div className="text-center my-3">
          <h2>Todos</h2>
          <p>Welcome to the Todo application!</p>
          <Link className="btn btn-primary" to="/todos">
            View Todos
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
