import './index.css'
// React Router Dom
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Article_1 from "./components/Article_1";
import Article_2 from './components/Article_2';
import Article_3 from './components/Article_3';
import Article_4 from './components/Article_4'; 
import Article_5 from './components/Article_5';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="article_1" element ={<Article_1/>}/>
      <Route path="article_2" element ={<Article_2/>}/>
      <Route path="article_3" element ={<Article_3/>}/>
      <Route path="article_4" element ={<Article_4/>}/>
      <Route path="article_5" element ={<Article_5/>}/>
    </Routes>
  );
}

export default App;



