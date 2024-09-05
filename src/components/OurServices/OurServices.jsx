import './OurServices.css'
import ThickLine from '../Thickline/ThickLine'
import Card from '../Card/Card'
import {cardData}  from '../../assets/CardData'
import LearnMore from '../LearnMore/LearnMore'

const OurServices = () => {
  return (
    <div className='our-services'>
      <div className='title'>
        <h1>Our services</h1>
        <ThickLine />
        <p className='service-p'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
      </div>

      <div className='services'>
      {cardData.map(( card, index ) =>(
        <Card className="service-card"
        key={index}
        image={card.image}
        title={card.title}
        content={card.content}
        />
      ))}
        
      </div>
      <LearnMore className="learnmore" title="Learn more" />
    </div>
  )
}

export default OurServices