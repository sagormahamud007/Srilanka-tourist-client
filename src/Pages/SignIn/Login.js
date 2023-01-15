import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthContext/ContextProvider';


const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const { userSignIn } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const navigate = useNavigate()
    const location = useLocation()


    const from = location.state?.from?.pathname || '/';

    const handleSignInUser = (data) => {
        setError('')
        userSignIn(data.email, data.password)

            .then(result => {
                setUserEmail(data.email)
                toast.success('Login successfully')
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (

        <div className="hero" style={{ backgroundImage: `url("https://lh5.googleusercontent.com/p/AF1QipNjq2TIrY1xvXc4fD77TztQY4iC01z8NZXUhZ6W=w542-h240-k-no")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
            
                <form className=' mt-14' onSubmit={handleSubmit(handleSignInUser)}>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    
      <div className="card-body">
                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email",
                            {
                                required: 'Email is required'
                            })} className="input input-bordered w-full max-w-xs" />
                        <span>{errors.email && <p className='text-red-600'>{errors.email?.message}</p>}</span>
                    </div>
                    <p className='text-red-600'>{error}</p>

                    <div className="form-control ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password", {

                        })} className="input input-bordered w-full max-w-xs" />
                        <span>{errors.password && <p className='text-red-600'>{errors.password?.message}</p>}</span>
                    </div>
                   
                    <input className='btn btn-accent w-full max-w-xs mt-5' value='Sign In' type="submit" />
                    </div>
                    <p className=' flex justify-center mb-5'>Create new account
                        <Link className='text-blue-500 ml-2 underline' to='/signUp'>Sign Up</Link></p>
                   </div>
                </form>
            </div>
            </div>
        </div>
        
        
    );
};

export default SignIn;