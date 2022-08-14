import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"
import Home from "./pages/Home"
import Income from "./pages/Income"
import updateIncome from "./pages/updateIncome"

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/income' element={<Income />}  />
          <Route path='/updateIncome' element={<updateIncome />}  />
      </Routes>
    </Router>
  )
}

export default App
