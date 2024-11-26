const TotalWordCount = ({ blogPosts }) => {
  const totalWordCount = blogPosts.filter(blog => blog.category === "Food").reduce((acc, curr) => acc + curr.content.split(' ').length, 0)
  return(
    <div>
      <h2>Total Word Count for Food</h2>
      <p>{totalWordCount}</p>
    </div>
  )
}

const TotalPrice = ({ laptops }) => {
  const totalPrice = laptops.reduce((acc, curr) => acc + curr.price, 0)
  return (
    <div>
      <h2>Total Price of Laptops</h2>
      <p>${totalPrice}</p>
    </div>
  )
}

const AvgCafeRating = ({ cafes }) => {
  const totalRating = cafes.filter(cafe => cafe.type === "cafe").reduce((acc, curr) => acc + curr.rating, 0)
  const cafeTypeLength = cafes.filter(cafe => cafe.type === "cafe").length
  const avgCafeRating = totalRating / cafeTypeLength
  
  return (
    <div>
      <h2>Average Rating for Cafes</h2>
      <p>{avgCafeRating}</p>
    </div>
  )
}

const TotalPagesOfBooks = ({ books }) => {
  const totalPages = books.reduce((acc, curr) => acc + curr.pages, 0)
  return (
    <div>
      <h2>Total Number of Pages</h2>
      <p>{totalPages}</p>
    </div>
  )
}

const TotalLikes = ({ tweets }) => {
  const totalLikesOnMorningTweet = tweets.filter(tweet => tweet.schedule === "Morning tweet").reduce((acc, curr) => acc + curr.likes, 0)
  const totalLikesOnEveningTweet = tweets.filter(tweet => tweet.schedule === "Evening tweet").reduce((acc, curr) => acc + curr.likes, 0)

  return (
    <div>
      <h2>Morning Tweets Like Count</h2>
      <p>{totalLikesOnMorningTweet}</p>
      <h2>Evening Tweets Like Count</h2>
      <p>{totalLikesOnEveningTweet}</p>
    </div>
  )
}

const TotalVerifiesPodcastListener = ({ podcasts }) => {
  const totalVerifiedPodcastListener = podcasts.filter(podcast => podcast.type === "verified").reduce((acc, curr) => acc + curr.listeners, 0)
  return (
    <div>
      <h2>Total Verified Listeners</h2>
      <p>{totalVerifiedPodcastListener}</p>
    </div>
  )
}

export default function App() {

  const blogPosts = [
    { id: 1, title: "Blog Post 1", content: "Content 1", category: "Technology"},
    { id: 2, title: "Blog Post 2", content: "Content 2", category: "Food" },
    { id: 3, title: "Blog Post 3", content: "Content 3", category: "Technology"},
    { id: 4, title: "Blog Post 4", content: "New content of food called Content 4", category: "Food"},
  ];

  const laptops = [
    { id: 1, brand: "Dell", price: 8999.99 },
    { id: 2, brand: "HP", price: 7999.99 },
    { id: 3, brand: "MacBook", price: 12999.99 },
  ];

  const cafes = [
    { id: 1, name: "Coffee House", rating: 4.5, type: "cafe" },
    { id: 2, name: "Cafe Latte", rating: 4.2, type: "cafe" },
    { id: 3, name: "Espresso Bar", rating: 4.8, type: "cafe" },
    { id: 3, name: "Me and U", rating: 4.3, type: "restaurant" },
  ];

  const books = [
    { id: 1, title: "Book 1", pages: 300 },
    { id: 2, title: "Book 2", pages: 250 },
    { id: 3, title: "Book 3", pages: 400 },
  ];

  const tweets = [
    { id: 1, content: "Tweet 1", likes: 20, schedule: "Morning tweet" },
    { id: 2, content: "Tweet 2", likes: 15, schedule: "Evening tweet" },
    { id: 3, content: "Tweet 3", likes: 30, schedule: "Morning tweet" },
    { id: 4, content: "Tweet 4", likes: 15, schedule: "Evening tweet" },
  ];

  const podcasts = [
    { id: 1, title: "Tech Talk", listeners: 5000, type: "verified" },
    { id: 2, title: "Science Insights", listeners: 1000, type: "unverified" },
    { id: 3, title: "Comedy Hour", listeners: 7000, type: "verified" },
  ];
  
  return (
    <main>
      <TotalWordCount blogPosts={blogPosts} />
      <hr />
      <TotalPrice laptops={laptops} />
      <hr />
      <AvgCafeRating cafes={cafes} />
      <hr />
      <TotalPagesOfBooks books={books} />
      <hr />
      <TotalLikes tweets={tweets} />
      <hr />
      <TotalVerifiesPodcastListener podcasts={podcasts} />
    </main>
  )
}
