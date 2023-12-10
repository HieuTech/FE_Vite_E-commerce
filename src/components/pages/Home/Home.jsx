import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { myAction } from "./store/actions/myActions";
const Home = () => {




  return (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/product">Product</Link>
      <Link to="/cart">Cart</Link>

      
    </div>
  );
};

export default Home;
