import './index.css'
// React Router Dom
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Article_1 from "./components/Article_1";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="article_1" element ={<Article_1/>}/>
    </Routes>
  );
}

export default App;



