import Weather from "./com/Weather.css"
//import Weather2 from "./com/Weather2.css"

import {Route, Routes} from 'react-router-dom';
import Home from "./com/Home";
import WeatherMain from "./com/WeatherMain";
import WeatherMain2 from "./com/WeatherMain2";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/w1' element={<WeatherMain />} />
      <Route path='/w2' element={<WeatherMain2 />} />
    </Routes>
    </>
  );
}

export default App;
