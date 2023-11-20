import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const {createUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const photo=form.get('photo');
        const email=form.get('email');
        const password=form.get('password');
        console.log(name,photo,email,password)
        createUser(email,password)
        .then((result=>{
          const user=result.user;
          console.log(user)
        }))
        .catch((error)=>{
          const errorMessage = error.message;
          console.log(errorMessage)
        })
       
    }
    return (
        <div>
            <Navbar></Navbar>
          <div>
          <h3 className="text-3xl my-10 text-center">please register</h3>
          <form className="lg:w-1/2 md:w-3/4 mx-auto" onSubmit={handleRegister}>
          <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
        </div>
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
            <button className="btn btn-primary">register</button>
          </div>
        </form>
        <p className="text-center  mt-2">already have an account please<Link to="/login" className="text-blue-600 ml-2 font-semibold">login</Link></p>
          </div>

        </div>
    );
};

export default Register;