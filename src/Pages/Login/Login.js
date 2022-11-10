import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import img from '../../Assets/login/login1.webp';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    const {login, signInWithGoogle} = useContext(AuthContext);
    useTitle('login');
    // redirect:
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleUserLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then (result =>{
            const user = result.user;
            // console.log(user);
          
          const currentUser = {
              email: user.email
          }
          console.log(currentUser);

          // get jwt token:
          fetch('https://independence-service-review-server.vercel.app/jwt', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            //not the best practice:
            localStorage.setItem('immigration-token', data.token) ;
            // navigate(from, {replace: true});
          })


        })
        .catch(err => console.error(err));

    }

    // Google signIn:
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then( result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err))
    }



    return (
        <div className="hero w-full my-20">
  <div className="hero-content grid gap-16 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     
     <img className='' src={img} alt="" />
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <form onSubmit={handleUserLogin}  className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input 
                type="text" 
                name='email'
                placeholder="email" 
                className="input input-bordered" 
                required
                />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input 
                type="password"
                 name='password'
                placeholder="password"
                 className="input input-bordered" 
                 required
                 />

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <button onClick={handleGoogleSignIn}  className="btn btn-outline btn-primary mb-3"><FaGoogle className='m-2'></FaGoogle> Google</button>
        <button  className="btn btn-outline btn-primary"><FaGithub className='m-2'></FaGithub> Github</button>
      <p className='text-center'>Immigration and Consultant <Link className='text-orange-600' to="/signup">Sign Up</Link> </p>
    </div>
  </div>
</div>
    );
};



export default Login;