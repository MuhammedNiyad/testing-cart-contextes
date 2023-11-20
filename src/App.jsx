import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Basket from "./pages/Basket"
import { StoreProvider } from "./context-&-reducer/StoreContext"

function App() {
  return (
    <>
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/basket" element= {<Basket />}/>
        </Routes>
      </Router>
    </StoreProvider>
    </>
    )
}

export default App