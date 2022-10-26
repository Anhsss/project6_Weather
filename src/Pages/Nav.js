import { Link } from "react-router-dom"
export default function Nav() {

  return (
    <>
      <h1>메뉴영역</h1>
      <ul>
        <li><Link to='/'>홈으로</Link></li>
        <li><Link to='/p1/home'>Page1</Link></li>
        <li><Link to='/p2'>Page2</Link></li>
      </ul>
    </>
  )
}