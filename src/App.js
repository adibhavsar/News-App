import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NewsCard from "./Components/NewsCard";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:index" element={<NewsCard/>} />
          {/*<Route path="/card/:id/searchparams" element={<NewsCard/>} />*/}
          <Route path="/*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;