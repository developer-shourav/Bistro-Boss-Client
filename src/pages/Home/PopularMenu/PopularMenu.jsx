import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
 
    const [menu, setMenu] = useState([]);
 


    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then( data => {
            const popularItems = data.filter( item => item.category ==='popular');
            setMenu(popularItems)
        })
    }, [])

    return (
        <div>
            <SectionTitle
              subHeading={'Check it   out'}
              mainHeading={'FROM OUR MENU'}
            > </SectionTitle>

            <div className="grid grid-cols-2 mb-12 gap-10">
                {
                    menu.map( item => <MenuItem
                     key={item?._id}
                     item={item}
                     > 
                    </MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;