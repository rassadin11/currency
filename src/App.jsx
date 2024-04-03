import './App.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/LoginPage/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="currency">
          <Route path=":name" element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
