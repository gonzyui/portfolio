import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router';
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
