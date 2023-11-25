import React from "react";
import { FaXing} from "react-icons/fa";


const Navbar = ({clearAll}) => {
  return (
    <nav>
      <h1>   <  FaXing />Expense Manager  </h1>
      
      <button className="btn rounded-3  m-3 btn-outline-light " onClick={() => clearAll()} > Clear All   </button>
   
    </nav>
    
    );
};

export default Navbar;
