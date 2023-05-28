import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | home</title>
      </Helmet>
      <Banner> </Banner>
      <Category> </Category>
      <PopularMenu> </PopularMenu>
      <Featured> </Featured>
      <Testimonials> </Testimonials>

      <ScrollRestoration/> 
    </div>
  );
};

export default Home;
