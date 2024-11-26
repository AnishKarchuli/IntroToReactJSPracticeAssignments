const Movies = ({ movies, name }) => {
  const movieDetail = movies.find(movie => movie.title === name)
  return(
    <div>
      <h2>Movie Details</h2>
      <p>Title: {movieDetail.title}</p>
      <p>Director: {movieDetail.director}</p>
      <p>Genre: {movieDetail.genre}</p>
    </div>
  ) 
}

const Cafes = ({ cafes, name }) => {
  const cafeDetail = cafes.find(cafe => cafe.name === name)
  return (
    <div>
      <h2>Cafe Data</h2>
      <p>Name: {cafeDetail.name}</p>
      <p>Location: {cafeDetail.location}</p>
      <p>Rating: {cafeDetail.rating}</p>
    </div>
  )
}

const Podcasts = ({ podcasts, title }) => {
  const podcastDetail = podcasts.find(podcast => podcast.title === title)
  return(
    <div>
      <h2>Podcast Details</h2>
      <p>Title: {podcastDetail.title}</p>
      <p>Host: {podcastDetail.host}</p>
      <p>Listeners: {podcastDetail.listeners}</p>
    </div>
  )  
}

const Books = ({ books, title }) => {
  const bookDetail = books.find(book => book.title === "Book 1")
  return (
    <div>
      <h2>Book Data</h2>
      <p>Title: {bookDetail.title}</p>
      <p>Author: {bookDetail.author}</p>
      <p>Pages: {bookDetail.pages}</p>
    </div>
  )
}

const Articles = ({ articles, title }) => {
  const articleDetail = articles.find(article => article.title === title)
  return (
    <div>
      <h2>Article Details</h2>
      <p>Title: {articleDetail.title}</p>
      <p>Author: {articleDetail.author}</p>
      <p>Category: {articleDetail.category}</p>
    </div>
  )
}

const BlogPosts = ({ blogPosts, category }) => {
  const blogPostDetail = blogPosts.find(blogPost => blogPost.category === category)
  return(
    <div>
      <h2>Blog Data</h2>
      <p>Id: {blogPostDetail.id}</p>
      <p>Title: {blogPostDetail.title}</p>
      <p>Content: {blogPostDetail.content}</p>
      <p>Category: {blogPostDetail.category}</p>
    </div>
  )
}

export default function App() {

  const movies = [
    { title: "Movie 1", director: "Director 1", genre: "Action" },
    { title: "Movie 2", director: "Director 2", genre: "Comedy" },
    { title: "Movie 3", director: "Director 3", genre: "Drama" },
  ];

  const cafes = [
    { name: "Cafe 1", location: "Location 1", rating: 4.5 },
    { name: "Cafe 2", location: "Location 2", rating: 4.2 },
    { name: "Cafe 3", location: "Location 3", rating: 4.8 },
  ];

  const podcasts = [
    { title: "Podcast 1", host: "Host 1", listeners: 5000 },
    { title: "Podcast 2", host: "Host 2", listeners: 3000 },
    { title: "Podcast 3", host: "Host 3", listeners: 7000 },
  ];

  const books = [
    { title: "Book 1", author: "Author 1", pages: 300 },
    { title: "Book 2", author: "Author 2", pages: 250 },
    { title: "Book 3", author: "Author 3", pages: 400 },
  ];

  const articles = [
    { title: "Article 1", author: "Author 1", category: "Technology" },
    { title: "Article 2", author: "Author 2", category: "Food" },
    { title: "Article 3", author: "Author 3", category: "Fashion" },
  ];

  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },
    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },
    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Technology' }
  ];
  
  return (
    <main>
      <Movies movies={movies} name="Movie 2" />
      <hr />
      <Cafes cafes={cafes} name="Cafe 2" />
      <hr />
      <Podcasts podcasts={podcasts} title="Podcast 3" />
      <hr />
      <Books books={books} title="Book 1" />
      <hr />
      <Articles articles={articles} title="Article 2" />
      <hr />
      <BlogPosts blogPosts={blogPosts} category="Food" />
    </main>
  )
}
