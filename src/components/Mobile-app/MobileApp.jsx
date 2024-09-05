import images from "../../images/images"
import LearnMore from "../LearnMore/LearnMore"
import './MobileApp.css'
const MobileApp = () => {
  return (
    <div className='mobil-content'>
        <div className='mobil-left'>
          <h1>Download our mobile apps</h1>
          <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
          <LearnMore className="btn" title="Download" />
        </div>

        <div className="mobil-right">
          <img src={images.illustration2} alt="" />
        </div>
    </div>
  )
}

export default MobileApp