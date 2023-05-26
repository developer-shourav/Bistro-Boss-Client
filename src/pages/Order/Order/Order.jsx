import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import orderCover from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter( item => item.category === 'dessert');
    const salad = menu.filter( item => item.category === 'salad');
    const pizza = menu.filter( item => item.category === 'pizza');
    const soup = menu.filter( item => item.category === 'soup');
    const offered = menu.filter( item => item.category === 'offered');
  
  return (
    <div>
      <Cover title="Order Food" bgImage={orderCover}>
        {" "}
      </Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>Salad Khaiben vai </TabPanel>
        <TabPanel>Pizza Khaiben vai</TabPanel>
        <TabPanel>Soup Khaiben vai</TabPanel>
        <TabPanel>Dessert Khaiben vai</TabPanel>
        <TabPanel>Drinks Khaiben vai</TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
