import About from "./components/About"
import Galleries from "./components/Galleries"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Programmes from "./components/Programmes"


const App = () => {
  return (
    <div>
      <div className="p-5 md:px-[10%]">
      <Navbar/>
      <Home/>
      <About/>
      <Programmes/>
      <Galleries/>
    </div>
    </div>
  )
}

export default App
