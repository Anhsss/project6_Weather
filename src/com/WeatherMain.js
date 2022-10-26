import WeatherDay from "./WeatherDay";
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'query-string';
//재랜더링 정의
import {useState} from 'react';

function WeatherMain() {
  let [day, setDay] = useState(3);

  const handleClick = (d) => {
    setDay(d);
    console.log(d);

    //홈버튼
    
  }
  const navigate = useNavigate();
    const Click = (k) => {
      const url = {
        '홈으로' : '/'
      }
      navigate(url[k])
    }
  return (
    <>
    <h1>단기정보</h1>
    <button onClick={()=>Click('홈으로')}>홈으로</button>
    <form>
      <button onClick={(e)=>{e.preventDefault(); handleClick(3);}}className="b1">3일 후 날씨</button>
      <button onClick={(e)=>{e.preventDefault(); handleClick(4);}}className="b1">4일 후 날씨</button>
      <button onClick={(e)=>{e.preventDefault(); handleClick(5);}}className="b1">5일 후 날씨</button>
      <button onClick={(e)=>{e.preventDefault(); handleClick(6);}}className="b1">6일 후 날씨</button>
    </form>
     <WeatherDay d={day}/>
    </>
  );
}

export default WeatherMain;