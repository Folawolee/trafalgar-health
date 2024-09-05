import { blogData } from "../../assets/CardData"
// import images from "../../images/images"
import BlogCard from "../BlogCard/BlogCard"
import LearnMore from "../LearnMore/LearnMore"
import ThickLine from "../Thickline/ThickLine"
import './Blog.css'

const Blog = () => {
  return (
    <div className="blog">
      <div className="title">
        <h2>Check out Our latest article</h2>
        <ThickLine className="line"/>
      </div>
      
      <div className="blog-post">
        {blogData.map(( card, index ) =>(
          <BlogCard className="blog-card1"
          key={index}
          image={card.image}
          title={card.title}
          content={card.content}
          />
        ))}
      </div>

      <LearnMore title="View all"/>
    </div>
)}

export default Blog