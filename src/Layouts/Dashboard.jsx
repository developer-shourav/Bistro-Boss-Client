import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from "react-icons/fa";
import {GrMenu} from 'react-icons/gr';
import {MdLocalDining} from 'react-icons/md';

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">

    <Outlet> </Outlet>
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side bg-[#D1A054]">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 h-full  ">
        
        <li><NavLink to='/dashboard/home'><FaHome/> User Home</NavLink></li>
        <li><NavLink to='/dashboard/reservations'><FaCalendarAlt/> Reservations</NavLink></li>
        <li><NavLink to='/dashboard/history'><FaWallet/> Payment History</NavLink></li>
        <li><NavLink to='/dashboard/mycart'><FaShoppingCart/> My Cart</NavLink></li>

        <div className="divider"></div>

        <li><NavLink to='/'><FaHome/>Home</NavLink></li>
        <li><NavLink to='/menu'><GrMenu/>  Our Menu</NavLink></li>
      <li><NavLink to='/order/salad'><MdLocalDining/> Order Food</NavLink></li>

        
      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;
