import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="trafalgar">
        <h3>Trafalgar</h3>
        <p className='trafalgar-about'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <p className='trafalgar-copy-right'>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>
      <div className='lists'>
        <ul>
          <li className="list-item-company">Company</li>
          <li className="list-item">About</li>
          <li className="list-item">Testimonials</li>
          <li className="list-item">Find a doctor</li>
          <li className="list-item">Apps</li>
        </ul>

        <ul>
          <li className="list-item-region">Region</li>
          <li className="list-item">Indonesia</li>
          <li className="list-item">Singapore</li>
          <li className="list-item">Hangkong</li>
          <li className="list-item">Canada</li>
        </ul>

        <ul>
          <li className="list-item-help">Help</li>
          <li className="list-item">Help center</li>
          <li className="list-item">COntact support</li>
          <li className="list-item">Instructions</li>
          <li className="list-item">How it works</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer