import LearnMore from "../LearnMore/LearnMore"
import './LeadProvider.css'
import images from "../../images/images"

const LeadProvider = () => {
  return (
    
      <div className='lead-content'>
        <div className='lead-left'>
          <img src={images.illustration1} alt="" />
        </div>

        <div className="lead-right">
          <h1>Leading healthcare providers</h1>
          <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
          <LearnMore title="Learn more"  className='btn' />
        </div>
      </div>
    
  )
}

export default LeadProvider