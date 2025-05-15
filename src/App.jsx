import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Characters from "./pages/Characters"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
        <Route path="/characters" Component={Characters} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
