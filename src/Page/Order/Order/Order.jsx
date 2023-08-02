import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
    const categories = ['salad', 'pizza','soup', 'dessert',  'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(category);
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
         <Helmet>
        <title>Bistro || Order  Food</title>
      </Helmet>
      <Cover img={coverImg} title="Order Food"></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="uppercase">
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
         <OrderTab item={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={pizza}></OrderTab>
        </TabPanel>
        <TabPanel> <OrderTab item={desserts}></OrderTab></TabPanel>
        <TabPanel>
            <OrderTab item={soup}></OrderTab>
        </TabPanel>
        <TabPanel> 
            <OrderTab item={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
