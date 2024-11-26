import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <main className='container p-4'>
      <h1 className='pb-2'>Latest Listings</h1>
      <section>
        <img src='https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww' alt='Cozy Loft in the City Center' className='img-fluid rounded' />
        <h4 className='mt-2 fw-semibold'>Cozy Loft in the City Center</h4>
        <p>Entire loft &middot; 2 guests &middot; 1 bedroom &middot; 1 bed &middot; 1 bath</p>
        <p>Enjoy your stay in this stylish loft apartment located in the heart of the city. Close to restaurants, shops and attractions, it's the perfect base for exploring the city.</p>
        <p>$120 per night</p>
      </section>
      <section>
        <img src='https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww' alt='Beachfront Villa' className='img-fluid rounded' />
        <h4>Beachfront Villa with Stunning Views</h4>
        <p>Entire villa &middot; 6 guests &middot; 3 bedroomd &middot; 3 beds &middot; 2 baths</p>
        <p>Relax and unwind in this beautiful beachfront villa. Wake up to panoramic ocean views, take a dip in the private pool, and enjoy seamless indoor-outdoor living.</p>
        <p>$300 per night</p>
      </section>
    </main>
  )
};