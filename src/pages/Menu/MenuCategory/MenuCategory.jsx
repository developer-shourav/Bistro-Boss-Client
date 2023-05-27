import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="pt-8">
      {
        title &&  <Cover bgImage={coverImg} title={title}> </Cover>
      }

      <div className="grid grid-cols-2 mb-12 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item?._id} item={item}></MenuItem>
        ))}
      </div>

      <Link to={`/order/${title}`} className="flex justify-center"> 
      <button className="btn btn-outline text-black   shadow shadow-white border-b-4  mt-4 ">Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
