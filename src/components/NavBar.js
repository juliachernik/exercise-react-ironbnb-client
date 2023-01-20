import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="/apartments">Apartments</NavLink>
        <NavLink to="/apartments/create">Create</NavLink>
      </nav>
    </>
  );
}

export default NavBar;
