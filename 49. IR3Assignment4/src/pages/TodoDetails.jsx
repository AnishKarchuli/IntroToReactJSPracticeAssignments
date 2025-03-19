import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { todos } from "./Todos";

export default function () {
  const { todoId } = useParams();

  const todoData = todos.find((todo) => todo.id === Number(todoId));

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container my-4 flex-grow-1">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                <h4 className="fw-semibold">Todo Details</h4>
                <p>ID: {todoData.id}</p>
                <p>Title: {todoData.title}</p>
                <p>Description: {todoData.description}</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
