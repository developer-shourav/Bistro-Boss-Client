import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart?.reduce((sum, item) => item.price + sum, 0);
  
  const handleDelete = id => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         fetch(`http://localhost:7000/carts/${id}`, {
            method:'DELETE'
         })
         .then( res => res.json())
         .then ( data => {
            if(data.deletedCount > 0){
                refetch()
                Swal.fire(
                    'Deleted!',
                    'Your food has been deleted.',
                    'success'
                  )
            }
         })
        }
      })

  }


  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <div className="uppercase font-semibold flex justify-evenly h-[60px] items-center">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-2xl">Total price: ${total}</h3>

        <button className="btn btn-warning btn-sm">PAY</button>
      </div>

      {/* --------------------Data Table--------------------- */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Food</th>
              <th>Items Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>


            {
                cart.map( (item, index) =>   <tr
                 key={item._id}
                >
                    <td>
                      {index + 1}
                    </td>
                    <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Food Item"
                            />
                          </div>
                        </div>
                    </td>
                    <td>
                     {item.name}
                    </td>
                    <td className="text-end">$ {item.price}</td>
                    <td>
                      <button onClick={() => handleDelete(item._id)} className="btn btn-ghost  text-white  bg-red-600 hover:bg-red-700"><FaTrashAlt/></button>
                    </td>
                  </tr>)
            }


          
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
  