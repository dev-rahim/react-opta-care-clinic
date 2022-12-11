import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/service/:serviceId' element={<Booking />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
