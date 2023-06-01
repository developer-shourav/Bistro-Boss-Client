import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
  const {name, price, recipe,image} = item ;
  const {user, dataReloader, setDataReloader} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();


  const handleAddToCart = foodItem => {
     const {_id, name, image, price} = foodItem;
     const cartItem = {
      menuItemId: _id,
      email: user.email,
      name, 
      image,
      price
     }
    if(user && user.email){
      fetch('http://localhost:7000/carts', {
        method:'POST',
        headers:{
          'content-type' :'application/json'
        },
        body:JSON.stringify(cartItem)
      })
      .then( res => res.json())
      .then( data => {
        if(data.insertedId){
          Swal.fire(
            'Good job!',
            'Successfully added to cart!',
            'success'
          )

          setDataReloader(!dataReloader)
        }
      })
    }
    else{
      Swal.fire({
        title:'You are not logged in',
        text: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from:location}})
        }
      })
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center mx-auto">{name}</h2>
        <h2 className="card-title btn absolute top-5 right-5  bg-gray-800 text-white rounded">$ {price}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center mt-3">
          <button onClick={() => handleAddToCart(item)} className="btn btn-active bg-opacity-20 text-amber-600 border-0 border-b-4 border-amber-600  text-center">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

/**
 * --------------------------------------------------
 *            API NAMING CONVENTION
 * --------------------------------------------------
 * users: userCollection
 * 
 * app.get('/users')
 * app.get('/users/:id')
 * app.post('/users')
 * app.patch('/users/:id')
 * app.put('/users/:id')
 * app.delete('/users/:id')
 * 
 * 
 * */