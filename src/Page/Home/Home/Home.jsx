import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Bistro || Home</title>
      </Helmet>
      <h2>This is Home</h2>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
     <Featured></Featured>
     <Testimonials></Testimonials>
    </div>
  );
};

export default Home;



