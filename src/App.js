import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:articleId" element={<Article />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
