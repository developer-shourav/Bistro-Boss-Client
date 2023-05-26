import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items}) => {
    return (
        <div className="grid grid-cols-2 mb-12 gap-10">
                {
                    items.map( item => <MenuItem
                     key={item?._id}
                     item={item}
                     > 
                    </MenuItem>)
                }
            </div>
    );
};

export default MenuCategory;