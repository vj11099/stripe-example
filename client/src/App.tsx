import Slider from "./components/carousel";
import Product from "./components/product-item";

// type IProducts = {
//   productName: string;
//   imgUrl: string;
//   price: number;
//   rating: number;
// };

function App() {
  const arr = [
    {
      productName: "Airdopes 121 Pro Plus",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_121_PRO_PLUS_ergonomic_design.45.jpg?v=1718601670",
      price: 10,
      originalPrice: 150,
      rating: 4.8,
    },
    {
      productName: "Stone Lumos",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lifestyle_03_Blue.png?v=1719295955",
      price: 20,
      originalPrice: 250,
      rating: 4.9,
    },
    {
      productName: "Stone 190 Pro",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/S190PRO_FI_Blue_04.png?v=1718780392",
      price: 18,
      originalPrice: 158,
      rating: 5,
    },
    {
      productName: "Immortal 158",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/immortal_158_banner1.76.jpg?v=1719218830",
      price: 125,
      originalPrice: 1525,
      rating: 4.5,
    },
  ];
  return (
    <div className="home-page">
      <div className="carousel-container">
        <Slider />
        <div className="product-catalogue">
          {arr.map((el, index) => (
            <Product
              name={el.productName}
              imgUrl={el.imgUrl}
              price={el.price}
              originalPrice={el.originalPrice}
              rating={el.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
