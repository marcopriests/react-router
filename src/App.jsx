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
          <Route path="/books">
            <Route index Component={Books} />
            <Route path=":id" Component={Detail} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
