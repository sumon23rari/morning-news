import { Link, NavLink } from "react-router-dom";
import BreackingNews from "../../Home/BreackingNews";
import userlogPic from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOut()
    .then()
  }
    const navlink=<>
    <li><NavLink to="/" className="capitalize">Home</NavLink></li>
    <li><NavLink to="/about" className="capitalize">about</NavLink></li>
    <li><NavLink to="/career" className="capitalize">career</NavLink></li>
    <li><NavLink to="/login" className="capitalize">logIn</NavLink></li>
    <li><NavLink to="/register" className="capitalize">register</NavLink></li>
             

    </>
    return (
        <>
        <BreackingNews></BreackingNews>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {navlink}
            </ul>
          </div>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navlink}
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={userlogPic} />
        </div>
      </label>
      {
        user? <button onClick={handleLogOut}>sign out</button> :
        <Link to="/login"><button className="btn btn-info text-white ml-2 px-6">logIn</button></Link>
      }
        
        </div>
      </div>
        </>
    
    );
};

export default Navbar;