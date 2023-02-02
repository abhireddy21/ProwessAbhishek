import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Card from './components/Card';
import CardHead from './components/CardHead';
import Challenges from './components/Challenges';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import ScoreBoard from './components/ScoreBoard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
          <Route path="/scoreboard" element={<ScoreBoard></ScoreBoard>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/challenges" element={<Challenges></Challenges>}></Route>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
