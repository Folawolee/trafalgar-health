import './Card.css'

const Card = ({ image, title, content }) => {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={image} alt="" />
            </div>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-content'>{content}</p>
            </div>
        </div>
    )
};
export default Card;