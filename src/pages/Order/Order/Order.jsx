import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCover from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

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
          <OrderTab items={salad}> </OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={pizza}> </OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={soup}> </OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={dessert}> </OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={drinks}> </OrderTab>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Order;
