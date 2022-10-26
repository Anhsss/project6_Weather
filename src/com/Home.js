import { useNavigate } from "react-router-dom"
export default function Home(){
  const navigate = useNavigate();
  const handleClick = (k) => {
    const url = {
    '단기예보' : '/w1?base_date=단기예보',
    '중기예보' : '/w2?base_date=중기예보'
    }
    navigate(url[k]);
  }

  return (
    <>
    <h1>일기예보</h1>
    <button onClick={()=>handleClick('단기예보')}>단기예보</button>
    <button onClick={()=>handleClick('중기예보')}>중기예보</button>
    </>
  )
}