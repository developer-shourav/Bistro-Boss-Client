import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div>
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
                cart.map( (row, index) =>   <tr
                 key={row._id}
                >
                    <td>
                      {index + 1}
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={row.image}
                              alt="Food Item"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{row.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>Purple</td>
                    <td>
                      <button className="btn btn-ghost btn-xs">details</button>
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
