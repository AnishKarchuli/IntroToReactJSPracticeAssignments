const Header = () => {
  return (
    <header>
      <h1>Welcome to Our Blog</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const BlogDetails = ({ blogDetails }) => {
  return (
    <div>
      <h2>{blogDetails.subject}</h2>
      <p>Author: {blogDetails.author}</p>
      <p>Date: {blogDetails.date}</p>
      <p>{blogDetails.content}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Our Blog. All rights reserved.</p>
    </footer>
  )
}

export default function App() {

  const blogDetails = {
    subject: "The Importance of Learning Raect",
    author: "Jane Doe",
    date: "March 1, 2024",
    content: "Lprem ipsum dolor sit amet, consectetur adipiscing elit..."
    
  }
  return (
    <>
      <Header />
      <main>
        <BlogDetails blogDetails={blogDetails}/>
    </main>
      <Footer />
    </>
    
  )
}
