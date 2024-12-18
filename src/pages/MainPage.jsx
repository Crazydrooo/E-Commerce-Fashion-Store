import NavigationButton from "../components/NavigationButton/NavigationButton";
import Slider from "../components/sliderFiles/Slider";

import Product from "./ProductPage/Product";

const MainPage = () => {
  return (
    <div>
      <Slider></Slider>
      <NavigationButton></NavigationButton>
      <Product></Product>
    </div>
  );
};

export default MainPage;
