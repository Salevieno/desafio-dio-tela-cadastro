import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from './styles/global';

import { Home } from './pages/home'
import { Login } from './pages/login'
import { Feed } from "./pages/feed";
import { Cadastro } from "./pages/cadastro";
import { TodoPage } from "./pages/TodoPage";

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/TodoPage" element={<TodoPage />} />
     </Routes >
    </Router>
  );
}

export default App;
