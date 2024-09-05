import './App.css'
import Blog from './components/Blog/Blog';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Heroes from './components/Heroes/Heroes';
import LeadProvider from './components/Lead-Providers/LeadProvider';
import MobileApp from './components/Mobile-app/MobileApp';
import Navbar from './components/Navbar/Navbar';
import OurServices from './components/OurServices/OurServices';


function App() {
    return (
        <div className='wrap-wrap'>

            <div className='app-wrapper'>
                <Navbar />
                <Heroes />
                <OurServices />
                <LeadProvider />
                <MobileApp />
                <Feedback />
                <Blog />
                <Footer />
            </div>
        </div>

    );
}

export default App;
