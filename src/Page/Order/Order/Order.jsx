import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const {category} = useParams();
  console.log(category);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Cover img={coverImg} title="Order Food"></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="uppercase">
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>dessert</Tab>
          <Tab>soup</Tab>
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
