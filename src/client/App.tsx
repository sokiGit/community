// IMPORT UTILS

// IMPORT STYLES
import './App.css'
import './components/global/global.css'

// IMPORT COMPONENTS
import Header from './components/global/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/global/Footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <Navigation default-open={true}/>
      <main>
        <h2>Using Vite, React and Vercel!</h2>
        <code>Discord: @sokiuwu</code><br/>
        <code>Server: discord.gg/uuAXCFfFhD</code>
      </main>
      <Footer/>
    </>
  )
}

export default App
