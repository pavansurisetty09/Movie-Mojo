import React from "react";
import Slider from "../MovieMojoSliders/Slider";

function SliderCom({ movies }) {
  return (
    <div>
      <Slider>
        {movies.map((movie, i) => (
          <Slider.Item movie={movie} key={i}>
            item1
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}

export default SliderCom;
