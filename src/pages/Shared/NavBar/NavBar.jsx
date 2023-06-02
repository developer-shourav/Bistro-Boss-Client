import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import {FaShoppingCart} from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  /* ------My Previous method before using React Query--------- */
/*   const {user, logOut, dataReloader} = useContext(AuthContext);
  const [cartItem, setCartItem] = useState([]); */

/* ------------Using React Query---------------- */
  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();

  
  const handleLogOut = () => {
    logOut()
    .then( () => {
      console.log('Log out successful');
    })
    .catch( error => {
      console.log(error.message);
    })
  }

  /* ------My Previous method before using React Query--------- */

/*   useEffect(() => {
    fetch('http://localhost:7000/carts')
    .then( res => res.json())
    .then( data => setCartItem(data))
  },[dataReloader])
 */


  const navOptions = (
    <>
      <li><Link to='/'> Home </Link></li>
      <li><Link to='/menu'> Our Menu</Link></li>
      <li><Link to='/order/salad'> Order Food</Link></li>
      <li><Link to='/register'> Register </Link></li>
      <li><Link to='/secret'> Secret </Link></li>

      {/* ------My Previous method before using React Query--------- */}
 {/*      <li><Link to='/' className=" gap-2">
          <FaShoppingCart/>
          <div className="badge badge-secondary">+{cartItem ? <>{cartItem.length}</> : <>0</> }</div>
         </Link>
      </li> */}

      <li><Link to='/dashboard/mycart' className=" gap-2">
          <FaShoppingCart/>
          <div className="badge badge-secondary">+{cart.length || 0}</div>
         </Link>
      </li>
      
      {
        user ? <> <li onClick={handleLogOut} className="btn rounded"> Log Out </li> </> :  <> <li><Link to='/login'> Login </Link></li></>
      }
    </>

  );



  return (
    <>
      <div className="navbar max-w-screen-xl fixed z-10 bg-black text-white bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
