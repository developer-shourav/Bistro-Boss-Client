
const FoodCard = ({item}) => {
  const {name, price, recipe,image} = item ;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center mx-auto">{name}</h2>
        <h2 className="card-title btn absolute top-5 right-5  bg-gray-800 text-white rounded">$ {price}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center mt-3">
          <button className="btn btn-active bg-opacity-20 text-amber-600 border-0 border-b-4 border-amber-600  text-center">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
