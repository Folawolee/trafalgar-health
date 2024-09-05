import './Heroes.css'
import images from '../../images/images'

const Heroes = () => {
  return (
    <div className='hero-content'>
      <div className='hero-left'>
        <h1>Virtual healthcare for you</h1>
        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <button type='button' className='btn'>Consult Today</button>
      </div>

      <div className="hero-right">
        <img src={images.illustration} alt="" />
      </div>
    </div>
  )
}

export default Heroes