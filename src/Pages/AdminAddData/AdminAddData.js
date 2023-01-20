import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthContext/ContextProvider';


const AdminAddData = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const imgKey = process.env.REACT_APP_imageKey;


   

    const handleAddProducts = (data) => {
    
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const uri = `https://api.imgbb.com/1/upload?key=${imgKey}`
        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(upload => {
                if (upload.success) {

                    //stored data from mongoDB
                    const AddData = {
                        product_name: data.product_name,
                        mobile: data.mobile,
                        image: upload.data.url,
                        userEmail: user?.email,
                        productDetails: data.productDetails,
                    }
                    fetch(`https://srilanka-tourist-server.vercel.app/cartData?email=${user?.email}`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(AddData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            reset({
                                userEmail: "",
                                password: "",
                                image:"",
                                mobile:"",
                                product_name: "",
                                productDetails: "",
                              });
                            toast.success('Tourist add successfully');
                            navigate('/dashboard')
                        })
                }
            })
    }


    return (
        <div className='w-full p-7'>
            <h2 className="text-4xl font-semibold">Add your Tourist</h2>
            <form className='grid md:grid-cols-2 lg:grid-cols-2 gap-6' onSubmit={handleSubmit(handleAddProducts)}>

                <div className='left w-ful'>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Tourist Name</span></label>
                        <input type="text" {...register("product_name", {
                            required: "Tourist_name is Required"
                        })} className="input input-bordered w-full" placeholder="Tourist name" />
                        {errors.product_name && <p className='text-red-500'>{errors.product_name.message}</p>}
                    </div>
                   
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Mobile Number</span></label>
                        <input type="text" {...register("mobile", {
                            required: "mobile number is Required"
                        })} className="input input-bordered w-full" placeholder="Your phone" />
                        {errors.mobile && <p className='text-red-600'>{errors.mobile.message}</p>}
                    </div>
                    
                </div>
                <div className='right'>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Image</span></label>
                        <input type="file" {...register("image", {
                            required: "Image is Required"
                        })} className="input input-bordered w-full" placeholder="Product image" />
                        {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Details</span></label>
                        <textarea style={{ height: '150px' }}  {...register("productDetails", { required: "productDetails Required" })} placeholder='Tourist Description' rows="10" className='input input-bordered w-full'></textarea>
                        {errors.productDetails && <p className='text-red-600'>{errors.productDetails.message}</p>}
                    </div>
                </div>
                <input className='btn btn-accent w-full  mx-auto' value="Add Your Data" type="submit" />
            </form>
        </div>

    );
};

export default AdminAddData;