import './BlogCard.css'

const BlogCard = ({ image, title, content }) => {
    return (
        <div className='blog-card'>
            <div className='blog-card-img'>
                <img src={image} alt="" />
            </div>
            <div className='blog-card-body'>
                <h2 className='blog-card-title'>{title}</h2>
                <p className='blog-card-content'>{content}</p>
            </div>
        </div>
    )
};
export default BlogCard;