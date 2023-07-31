import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
  return (
    <div>
      <h2>This is Home</h2>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
     <Featured></Featured>
    </div>
  );
};

export default Home;
