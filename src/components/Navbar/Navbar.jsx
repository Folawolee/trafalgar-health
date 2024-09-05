import images from "../../images/images"
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
          <img src={images.logo} alt="" />
      </div>      
      <ul className="nav-list">
        <li className="nav-home">Home</li>
        <li className="nav-item">Find a doctor</li>
        <li className="nav-item">Apps</li>
        <li className="nav-item">Testimonials</li>
        <li className="nav-item">About us</li>
      </ul>
      
    </nav>
  )
}

export default Navbar 