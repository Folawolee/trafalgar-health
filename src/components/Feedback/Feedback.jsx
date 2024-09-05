import images from '../../images/images'
import './Feedback.css'
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
const Feedback = () => {
  return (
    <div className='feedback'>
      <div className='profile1'>
        <h2>What our customers are saying</h2>
        <hr />
        <div className='profile'>
          <div className='profile-left'>
            <img src={images.profile} alt="" />
            <h3>Edward Newgate</h3>
            <p>Founder Circle</p>
          </div>
          <div className='profile-right'>
            <p className='letter'>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
          </div>
        </div>
      </div>

      <div className='arrow-nav'>
        <HiArrowLongLeft className='arrow' />
        <i className="fa-solid fa-arrow-left"></i>
        <i className="fa-solid fa-arrow-left"></i>
        <HiArrowLongRight className='arrow' />

      </div>

    </div>
  ) 
}

export default Feedback