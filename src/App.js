import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Rockets from './Components/Rockets';
import MyProfile from './Components/MyProfile';
import Missions from './Components/Missions';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
