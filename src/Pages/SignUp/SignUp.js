import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthContext/ContextProvider';


const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, userName, googleSign } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userInfo = {
                    displayName: data.name
                }
                userName(userInfo)
                    .then(() => {
                        storeUserDB(data.name, data.email, data.role)
                        toast.success('Signup Successfully')
                        navigate(from, { replace: true });
                    })
                    .catch(err => console.error(err))
            })

            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }


    const storeUserDB = (name, email, role) => {
        const user = { name, email, role };
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setUserEmail(email)
                }

            })
    }
    const googleLogin = () => {
        googleSign()
            .then(result => {
                navigate('/')
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden'>
            <div className='mt-10'>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png" alt="" />
            </div>
            <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mt-10 bg-base-100">
             <div className="card-body">
                <form className='' onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: 'Must be your name'
                        })} className="input input-bordered w-full max-w-xs" />
                        <span>{errors.name && <p className='text-red-600'>{errors.name?.message}</p>}</span>
                    </div>
                    <p className='text-red-600'>{error}</p>

                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email",
                            {
                                required: 'Email is required'
                            })} className="input input-bordered w-full max-w-xs" />
                        <span>{errors.email && <p className='text-red-600'>{errors.email?.message}</p>}</span>
                    </div>

                    <div className="form-control ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password",
                            {
                                minLength: {
                                    value: 6, message: 'Password must be 6th character'
                                },
                                pattern: { value: /^(?=.*[A-Z])/, message: 'Password must be Uppercase' }
                            })} className="input input-bordered w-full max-w-xs" />
                        <span>{errors.password && <p className='text-red-600'>{errors.password?.message}</p>}</span>
                    </div>
                    <input className='btn btn-accent text-black w-full  mt-5' value='Sign Up' type="submit" />
               
                </form>
                <p className='mt-2'>Already have an account?
                        <Link className='text-blue-400 ml-2 underline' to='/signIn'>Please login</Link></p>
                </div>
        </div>
                <button onClick={googleLogin} className='btn btn-accent text-black  w-full max-w-xs mt-5 ml-8'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;