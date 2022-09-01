import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './Components/NavBar';
import MyProfile from './Components/Profile/MyProfile';
import Missions from './Components/Missions';
import { fetchRocket } from './redux/Rocket';
import Rocket from './Components/Rockets/Rocket';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function intitData() {
      dispatch(fetchRocket());
    }
    intitData();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
