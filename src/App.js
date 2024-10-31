import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import UserSettings from './pages/UserSettings';
import NewProyect from './pages/NewProyect';
import Storyboard from './pages/Storyboard';
import Locations from './pages/Locations';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/usersettings" element={<UserSettings />} />
        <Route path='/newproyect' element={<NewProyect/>}/>
        <Route path='/storyboard' element={<Storyboard/>}/>
        <Route path='/locations' element={<Locations/>}/>

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
