import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const LogIn = () => {
  const {logInUser}=useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate()
  console.log('location in login page',location)
    const handleLogIn=(e)=>{
        e.preventDefault()
        console.log(e.currentData)
        const form=new FormData(e.currentTarget)
        const email=form.get('email');
        const password=form.get('password');
        logInUser(email,password)
        .then((result)=>{
          console.log(result.user)
        navigate(location?.state?location.state:'/')
        })

    }
    return (
        <div>
            <Navbar></Navbar>
          <div>
          <h3 className="text-3xl my-10 text-center">please log In</h3>
          <form className="lg:w-1/2 md:w-3/4 mx-auto" onSubmit={handleLogIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text" >Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center  mt-2">Do not have an account<Link to="/register" className="text-blue-600 ml-2">register</Link></p>
          </div>

        </div>
    );
};

export default LogIn;