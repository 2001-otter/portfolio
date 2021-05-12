// unused until slickGoTo method fixed

import React, { useEffect, useState, useRef } from "react";

import styles from "./Slider.module.css";

import "./slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slick from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow className={styles.SliderButton} />,
  prevArrow: <SamplePrevArrow />,
  dots: false,
};

const Slider = (props) => {
  let [initialSlide, setInitialSlide] = useState(0);
  const slickSlider = useRef(null);

  useEffect(() => {
    if (props.selected) setInitialSlide(props.selected.id);
    slickSlider.slickGoTo(initialSlide);
  }, [props.selected, initialSlide]);

  return (
    <Slick ref={slickSlider} {...settings} currentSlide={initialSlide}>
      {props.children}
    </Slick>
  );
};

export default Slider;

// import React, { Component } from "react";
// import Slider from "react-slick";

// import styles from "./Slider.module.css";

// import "./slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default class SlickGoTo extends React.Component {
//   state = {
//     slideIndex: 0,
//     updateCount: 0,
//     initialSlide: 0,
//   };

//   componentWillUpdate(prevProps, prevState) {}

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       this.props.selected &&
//       prevState.initialSlide !== this.props.selected.id - 1
//     ) {
//       this.setState({ initialSlide: this.props.selected.id - 1 });
//     }
//     console.log(this.state.initialSlide);
//     this.slider.slickGoTo(this.state.initialSlide, false);
//   }

//   render() {
//     const settings = {
//       infinite: true,

//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       // nextArrow: <SampleNextArrow className={styles.SliderButton} />,
//       // prevArrow: <SamplePrevArrow />,
//       dots: false,
//       afterChange: () =>
//         this.setState((state) => ({ updateCount: state.updateCount + 1 })),
//       // beforeChange: (current, next) => this.setState({ slideIndex: next }),
//     };

//     return (
//       <div>
//         {/* <h2>Slick Go To</h2>
//         <p>Total updates: {this.state.updateCount} </p>
//         <input
//           onChange={(e) => this.slider.slickGoTo(e.target.value)}
//           value={this.state.slideIndex}
//           type="range"
//           min={0}
//           max={3}
//         /> */}
//         <Slider
//           ref={(slider) => (this.slider = slider)}
//           {...settings}
//           initialSlide={this.props.initialSlide}
//         >
//           {this.props.children}
//         </Slider>
//       </div>
//     );
//   }
// }
