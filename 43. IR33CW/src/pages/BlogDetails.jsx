import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogDetails = () => {

  const { blogId } = useParams()
  
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      datePosted: "February 22, 2024"
    },
    {
      id: 2,
      title: "Blog 2",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      datePosted: "February 26, 2024"
    },
    {
      id: 3,
      title: "Blog 3",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      datePosted: "February 29, 2024"
    }
  ]

  const blogData = blogs.find(blog => blog.id === parseInt(blogId))
  
  return (
    <>
      <Header />
      <main className='container py-4'>
        <h1>{blogData.title}</h1>
        <small>Posted on {blogData.datePosted}</small>
        <p className='pt-3'>{blogData.content}</p>
      </main>
      <Footer />
    </>
  )
}

export default BlogDetails;