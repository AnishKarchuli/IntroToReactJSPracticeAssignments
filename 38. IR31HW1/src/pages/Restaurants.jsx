export default function Restaurants() {
  return (
    <main className="container p-4">
      <h1>Restaurants</h1>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Taste of India"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Taste of India</h5>
                  <p className="card-text">
                    Enjoy authentic Indian cuisine at Taste of India. Explore a
                    variety of delicious dishes from different regions of India.
                  </p>
                  <p className="text-secondary">Rating 4.7 | Open Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Pizza Paradise"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Pizza Paradise</h5>
                  <p className="card-text">
                    Indulge in mouth-watering pizzas at Pizza Paradise. With a
                    variety of toppings and crusts, it's a pizza lover's dream.
                  </p>
                  <p className="text-secondary">Rating: 4.5 | Open Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
