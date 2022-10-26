import { useLocation } from 'react-router-dom';
import qs from 'query-string';
export default function Page2() {
  const loc = useLocation().search;
  console.log(loc)

  const q = qs.parse(loc);
  console.log(q);

  // let loc2 = loc.replace('?', '').split('&');
  // loc2 = loc2.map((m)=>m.split('=')[1])
  // console.log(loc2);
  console.log(Object.keys(q).length)

  return (
    <>
      <h1>Page2</h1>
      {Object.keys(q).length===0 ? <h2>전달자료없음</h2> : <h2>{q.item}( {q.item2} )</h2>}
    </>
  )
}