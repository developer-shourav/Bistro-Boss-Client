import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import orderCover from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";


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
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 ">
          {
            salad.map( item => <FoodCard
            key={item?._id}
            item={item}
            > 

            </FoodCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>Pizza Khaiben vai</TabPanel>
        <TabPanel>Soup Khaiben vai</TabPanel>
        <TabPanel>Dessert Khaiben vai</TabPanel>
        <TabPanel>Drinks Khaiben vai</TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
