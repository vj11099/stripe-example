interface IProductDetails {
  name: string;
  imgUrl: string;
  price: number;
  originalPrice: number;
  rating: number;
}

const Product: React.FC<IProductDetails> = ({
  name,
  imgUrl,
  price,
  originalPrice,
  rating,
}) => {
  return (
    <div className="product-item">
      <img src={imgUrl} className="product-image" />
      <div>{name}</div>
      <div className="flex flex-row">
        <b>Price: </b>
        {price}
        <div className="text-opacity-30 line-through text-sm pl-2">
          {originalPrice}
        </div>
      </div>
      <div>
        <b>Rating: </b>
        {rating}
      </div>
    </div>
  );
};

export default Product;
