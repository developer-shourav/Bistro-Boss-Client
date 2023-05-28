import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBG from '../../../assets/menu/banner3.jpg';
import dessertBG from '../../../assets/menu/dessert-bg.jpeg';
import pizzaBG from '../../../assets/menu/pizza-bg.jpg';
import saladBG from '../../../assets/menu/salad-bg.jpg';
import soupBG from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import { ScrollRestoration } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter( item => item.category === 'dessert');
  const salad = menu.filter( item => item.category === 'salad');
  const pizza = menu.filter( item => item.category === 'pizza');
  const soup = menu.filter( item => item.category === 'soup');
  const offered = menu.filter( item => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        
      </Helmet>

      <Cover bgImage={menuBG} title='Our Menu'> </Cover>
      {/* ----Main Cover----- */}

      <SectionTitle 
       subHeading="Don't miss"
       mainHeading="Today's Offer"
      > </SectionTitle>

      {/* -------Offered menu item-------- */}
       
      <MenuCategory items={offered}> </MenuCategory>
      
      {/* -------dessert menu item-------- */}
      <MenuCategory items={dessert} title={'dessert'} coverImg={dessertBG} > </MenuCategory>

       {/* -------Pizza menu item-------- */}
       <MenuCategory items={pizza} title={'pizza'} coverImg={pizzaBG}> </MenuCategory>

       {/* -------salad menu item-------- */}
       <MenuCategory items={salad} title={'salad'} coverImg={saladBG}> </MenuCategory>

       {/* -------soup menu item-------- */}
       <MenuCategory items={soup} title={'soup'} coverImg={soupBG}> </MenuCategory>

       <ScrollRestoration/> 
    </div>
  );
};

export default Menu;
