// IMPORT UTILS

// IMPORT STYLES
import './App.css'
import './components/global/global.css'

// IMPORT COMPONENTS
import RoutesElement from './components/frontendRoutes/RoutesElement/RoutesElement'
import Header from './components/global/Header/Header'
import Navigation from './components/global/Navigation/Navigation'
import Footer from './components/global/Footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <Navigation default-open={false}/> {/* uhh idk why I even made this a thing */}
      <RoutesElement/>
      <Footer/>
    </>
  )
}

export default App
