import Slider, { Settings } from "react-slick";
import Shay1 from "../assets/images/shay1.jpg";
import Shay2 from "../assets/images/shay2.jpeg";
import Shay3 from "../assets/images/shay3.jpeg";

function AutoPlay() {
  const settings: Settings = {};
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={Shay1} />
        </div>
        <div>
          <img src={Shay2} />
        </div>
        <div>
          <img src={Shay3} />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
