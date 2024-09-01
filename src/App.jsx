import About from './Components/About'
import Contect from './Components/Contect'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navigation from './Components/Navigation'
import Portfolio from './Components/Portfolio'
import SocialIcons from './Components/SocialIcons'


function App() {


  return (
    <div className='w-full h-full'>
      <Navigation />
      <Home />
      <SocialIcons />
      <About />
      <Portfolio />
      <Contect />
      <Footer />
    </div>
  )
}

export default App
