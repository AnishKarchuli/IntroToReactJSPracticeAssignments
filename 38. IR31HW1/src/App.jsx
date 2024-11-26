import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <main className='container p-4'>
      <h1 className='py-2'>Featured Restaurants</h1>
      <img src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' alt='Taste of Italy' className='img-fluid rounded' />
      <h4 className='pt-3 fw-semibold'>Taste of Italy</h4>
      <p>Italian | Rating: 4.5</p>
      <p>123 Main Street, Anytown, USA</p>
      <img src='https://images.unsplash.com/photo-1552566626-52f8b828add9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' alt='' className='img-fluid rounded' />
      <h4 className='pt-3 fw-semibold'>Spice Village</h4>
      <p>Indian | Rating: 4.3</p>
      <p>456 Elm Street, Anytown, USA</p>
    </main>
  )
};