import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Books from "./pages/books/Books"
import Detail from "./pages/books/Detail"
import DefaultLayout from "./components/DefaultLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Homepage} />
          <Route path="/about" Component={About} />
          <Route path="/books" Component={Books} />
          <Route path="/books/:id" Component={Detail} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
