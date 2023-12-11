// import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Product from "./Product/";
import Carousel from "./Carousel_Home";
import SocialMedia from "./SocialMedia";
import Footer from "../../Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Carousel/>
      <Product/>
      <SocialMedia/>
      <Footer/>
    </div>
  );
};

export default Home;
