import weather2 from '../db/Weather2.json'
import item from '../db/item.json'

import { useLocation, useNavigate} from 'react-router-dom'
import qs from 'query-string';

function WeatherMain2() {
  const loc = useLocation().search;
  const q = qs.parse(loc);

  const w2 = weather2.response.body.items.item;
  const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };
  const sky = { "1": "맑음", "3": "구름많음", "4": "흐림" };
  console.log(w2);

 /*  let lis = [];
  for(let w  of w2) {
    if (w.category === 'PTY') {
      switch (w) {
        case "POP":
          lis.push(<li key={w.category}>item["POP"][0]:{w.obsrValue} item[w.category][1]</li>)
          break;
        case "PTY":
          lis.push(<li key={w.category}>"강수형태":{w.obsrValue}%</li>)
          break;
        case "PCP":
          lis.push(<li key={w.category}>"1시간 강수량":{w.obsrValue}%</li>)
          break;
          case "REH":
          lis.push(<li key={w.category}>"습도":{w.obsrValue}%</li>)
          break;
          case "RN1":
          lis.push(<li key={w.category}>"1시간 강수량":{w.obsrValue}%</li>)
          break;
          case "SNO":
          lis.push(<li key={w.category}>"1시간 신적설":{w.obsrValue}%</li>)
          break;
          case "SKY":
          lis.push(<li key={w.category}>"하늘상태":{w.obsrValue}%</li>)
          break;
          case "TMP":
          lis.push(<li key={w.category}>"1시간 기온":{w.obsrValue}%</li>)
          break;
      }
        
    }
    else if (w.category === 'SKY') {

    }
    else {
      lis.push(<li key={w.category}>{w.category}:{w.obsrValue}</li>)
    }
  } */

 /*   const lis = Object.entries(w2).map((m) =>(
    <li>{m[1].category}:{m[1].obsrValue}</li>
   )
   ); 
   console.log(lis) */
 //새로운 배열 생성 : for
 /*  let lis = [];
  for (let m of w2) {
    lis.push(m)
  } */
  // 새로운 배열 생성 : map
  let lis = w2.map((m)=>
  (m.category === 'PTY')
  ? <li key={m.category}className='li1'><span className='cat'>{item[m.category][0]}</span> <span className='obs'>{pty[m.obsrValue]}</span></li>
  :<li key={m.category}className='li1'><span className='cat'>{item[m.category][0]}</span> <span className='obs'>{m.obsrValue}{item[m.category][1]}</span></li>
  );
  console.log(lis);
  const navigate = useNavigate();
  const Click = (k) => {
    const url = {
      '홈으로' : '/'
    }
    navigate(url[k])
  }
  return (
    <>
    <h1>중기정보</h1>
    <button onClick={()=>Click('홈으로')}>홈으로</button>
   
      <ul>
        {lis}
      </ul>
    </>
  );

  }
export default WeatherMain2;