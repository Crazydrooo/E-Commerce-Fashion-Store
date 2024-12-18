import { useDispatch, useSelector } from "react-redux";
import { sliderData } from "../../assets/DummyData";
import { nextSlide, prevSlide, dotSlice } from "../../features/SliderSlice";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import "./Slider.css";

const Slider = () => {
  const sliderIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(prevSlide());
  };

  const handleNext = () => {
    dispatch(nextSlide());
  };

  const handleDot = (index) => {
    dispatch(dotSlice(index));
  };
  return (
    <div>
      {sliderData.map((item) => (
        <div key={item.id}>
          {parseInt(item.id) === sliderIndex && (
            <img src={item.img} alt="" className="images_slider" />
          )}
        </div>
      ))}
      <div className="dotcontainer">
        {sliderData.map((dot, index) => (
          <button
            style={{ backgroundColor: sliderIndex === index ? "black" : "" }}
            key={index}
            className="dots"
            onClick={() => handleDot(index)}
          ></button>
        ))}
      </div>

      <div className="sliderbtn">
        <button className="btn" onClick={handleBack}>
          <FaAngleLeft className="icons" />
        </button>
        <button className="btn" onClick={handleNext}>
          <FaAngleRight className="icons" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
