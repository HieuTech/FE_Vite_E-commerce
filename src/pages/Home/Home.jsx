// import { Link } from "react-router-dom";
import Product from "./Product/";
import Carousel from "./Carousel_Home";
import SocialMedia from "./SocialMedia";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
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
