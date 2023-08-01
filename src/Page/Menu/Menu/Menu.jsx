import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/home/banner3.jpg'

const Menu = () => {
  return (
    
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <Cover
      img={menuImg}
      title='our menu'
      ></Cover>
      <h2>menu menu</h2>
    </div>
  );
};

export default Menu;
