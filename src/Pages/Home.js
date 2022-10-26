import { Link , useNavigate } from "react-router-dom"
export default function Home() {
  const navigate = useNavigate();
  const handleClick = (k) => {
    const url = {
      '사과' : '/p2?item=사과&item2=과일',
      '바나나' : '/p2?item=바나나&item2=과일',
      '당근' : '/p2?item=당근&item2=야채'
    }
    console.log(url[k]);
    navigate(url[k]);
  }

  return (
    <>
      <h1>Home</h1>
      <h2>Page1으로 이동</h2>
      <ul>
        <li><Link to='/p1/사과'>사과</Link></li>
        <li><Link to='/p1/바나나'>바나나</Link></li>
        <li><Link to='/p1/당근'>당근</Link></li>
      </ul>
      <h2>Page2으로 이동</h2>
       <button onClick={()=>handleClick('사과')}>사과</button>
       <button onClick={()=>handleClick('바나나')}>바나나</button>
       <button onClick={()=>handleClick('당근')}>당근</button>
    </>
  )
}