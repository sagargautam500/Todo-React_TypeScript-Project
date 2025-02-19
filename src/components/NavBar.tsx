import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
        <Link to="/" className="">All</Link>
        <Link to="/?todos=active" className="">Active</Link>
        <Link to="/?todos=complete" className="">Complete</Link>
    </div>
  )
}

export default NavBar;