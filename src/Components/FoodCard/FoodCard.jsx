const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 p-2">
        ${price}
      </p>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="items-center-center text-orange-400 bg-slate-100 btn btn-outline border-0 border-orange-400 border-b-4 mt-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
