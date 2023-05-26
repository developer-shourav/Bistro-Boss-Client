import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBG from '../../../assets/menu/banner3.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter( item => item.category === 'dessert');
  const salad = menu.filter( item => item.category === 'salad');
  const drinks = menu.filter( item => item.category === 'drinks');
  const pizza = menu.filter( item => item.category === 'pizza');
  const soup = menu.filter( item => item.category === 'soup');
  const offered = menu.filter( item => item.category === 'offered');

  console.log(dessert);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        
      </Helmet>
      <Cover
      bgImage={menuBG}
      title='Our Menu'
      > </Cover>
      <SectionTitle 
       subHeading="Don't miss"
       mainHeading="Today's Offer"
      > 

      </SectionTitle>
      <MenuCategory items={offered}> 

      </MenuCategory>
      
    </div>
  );
};

export default Menu;
