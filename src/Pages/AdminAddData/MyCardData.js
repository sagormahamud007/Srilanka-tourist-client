import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthContext/ContextProvider';
const Swal = require('sweetalert2')

const MyCardData = () => {
    const { user } = useContext(AuthContext)

    const { data: products=[],refetch } = useQuery({
        queryKey: ['bookingData', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://srilanka-tourist-server.vercel.app/bookingData?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    });

const DeleteItem=(id)=>{
    fetch(`https://srilanka-tourist-server.vercel.app/cartId/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        alert("are you sure deleted")

        toast.success('Tourist deleted successfully');
        refetch()
          });
}


const UpdateItem=(product,id)=>{
    console.log(product)
    fetch(`https://srilanka-tourist-server.vercel.app//reportProduct/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body:JSON.stringify(product)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        toast.success('Tourist Name Update');
        refetch()
          });
}



    return (
        <div className='mt-5'>
             <label htmlFor="Dashboard-drawer" className="btn btn-sm ml-5 lg:hidden drawer-button">Open drawer</label>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>Image</th>
                            <th>Tourist place name</th>
                            <th> Mobile-Number </th>
                            <th> Email </th>
                            <th> Delete Card </th>
                            <th> Update Card</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.length &&
                            products.map((product, i) => (
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.image} alt="Avatar Tailwind CSS Component" />
              </div>
              </div>
              </td>

                                    <th> {product.product_name} </th>
                                    <th> {product.mobile} </th>
                                    <th> {product.userEmail} </th>
                                    <th>
                                        <button onClick={()=>DeleteItem(product._id)} className="btn btn-sm btn-outline">Delete</button>
                                    </th>
                                    <th>
                                        <button onClick={()=>UpdateItem(product, product._id)} className="btn btn-sm btn-outline">Update</button>
                                    </th>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default MyCardData;