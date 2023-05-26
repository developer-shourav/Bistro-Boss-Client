import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImage from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
  return (
    <div className="featured-item pt-8 my-20">
      <SectionTitle
        subHeading={"Check it out"}
        mainHeading={"Featured Item"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center py-20 pt-12  px-36">
          <div>
            <img src={FeaturedImage} alt="" />
          </div>
          <div className="md:ml-10 text-white">
            <p>Aug 20, 2023</p>
            <p className="uppercase">Where can I get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, asperiores culpa. Libero veniam at quae eligendi accusamus vero, quisquam alias eos ipsum natus doloribus, aliquid quaerat id ab sapiente tenetur aspernatur itaque ipsa culpa nobis aliquam minus, consequuntur optio? Placeat quas delectus porro laboriosam ipsa iusto, sint vero quia illum!</p>

            <button className="btn btn-outline">Order Now</button>
          </div>
      </div>
    </div>
  );
};

export default Featured;
