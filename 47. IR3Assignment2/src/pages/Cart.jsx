import Footer from "../components/Footer";
import Header from "../components/Header";

export default function () {
  const cart = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 79.99, quantity: 3 },
  ];

  const calculateTotalPrice = () => {
    return cart.reduce((acc, curr) => acc + (curr.price * curr.quantity) , 0).toFixed(2)
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container my-3 flex-grow-1">
        <h1>Shopping Cart</h1>
        <div className="row pt-2">
          {cart.map((item) => (
            <div className="col-12 col-md-12" key={item.id}>
              <div className="card no-gutters">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5>{item.name}</h5>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <div>
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <h4 className="fw-semibold">Total Price: ${calculateTotalPrice()}</h4>
      </main>
      <Footer />
    </div>
  );
}
