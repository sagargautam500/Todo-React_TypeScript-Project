import { Link, useSearchParams } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const[searchParam]=useSearchParams();
  let todosData=searchParam.get("todos");
  return (
    <div className="Navbar">
        <Link to="/" className={`NavLink ${todosData==null?"active":""}`}>All</Link>
        <Link to="/?todos=active" className={`NavLink ${todosData==="active"?"active":""}` }>Active</Link>
        <Link to="/?todos=complete" className={`NavLink ${todosData==="complete"?"active":""}`}>Complete</Link>
    </div>
  )
}

export default NavBar;