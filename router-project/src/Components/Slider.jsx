import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import React,{ useState } from "react";


 const imgArr = [
    { image:"https://cdn.grabon.in/gograbon/images/web-images/uploads/1621488513434/today-electronics-offers.jpg"
    },
    { image: "https://static.toiimg.com/photo/msid-88337901/88337901.jpg"
    },
    { image:"https://images.freekaamaal.com/home-slider/site/mobile_croma-branding-banner-(16-sep)-mobilejpg.webp"
    },
    { image: "https://thumbs.dreamstime.com/z/electronics-promotional-sales-banner-shopping-cart-electronics-devices-promotional-sale-banner-full-shopping-cart-168812806.jpg"
    },
    { image: "https://nutboltz.com/wp-content/uploads/2022/04/slider-banner3.jpg"
    }
  ];



const ImageSlider = () => {
  const [count, setCount] = useState(0);
  const length = imgArr.length;

  const nextImg = () => {
    setCount(count === length - 1 ? 0 : count + 1);
  };

  const prevImg = () => {
    setCount(count === 0 ? length - 1 : count - 1);
  };

  if (!Array.isArray(imgArr) || imgArr.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevImg} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextImg} />
      {imgArr.map((elem,index) => {
        return (
          <div>
            {index === count && (
              <img src={elem.image} alt='discounts on Products' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;