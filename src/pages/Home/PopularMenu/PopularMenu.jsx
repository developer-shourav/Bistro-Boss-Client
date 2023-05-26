
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
 
    const [menu] = useMenu() ;
    const popular = menu.filter( item => item.category === 'popular');

    return (
        <div>
            <SectionTitle
              subHeading={'Check it   out'}
              mainHeading={'FROM OUR MENU'}
            > </SectionTitle>

            <div className="grid grid-cols-2 mb-12 gap-10">
                {
                    popular.map( item => <MenuItem
                     key={item?._id}
                     item={item}
                     > 
                    </MenuItem>)
                }
            </div>
            <button className="btn btn-outline block mx-auto  border-b-4  mt-4 ">View Full  Menu</button>
        </div>
    );
};

export default PopularMenu;