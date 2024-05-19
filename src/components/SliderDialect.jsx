import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import SliderBtn from './shared/SliderBtn';
import DiaclectImg from '../assets/dialect.jpg';
import './components.css';

const CustomSlider = () => {
  const navigate = useNavigate();

  const array = [
    { pic: DiaclectImg, label: 'Waray', nav: '/dialecto/animal-category', bgColor: '#FFD700' },
    { pic: DiaclectImg, label: 'Ilocano', nav: '', bgColor: 'aqua' },
    { pic: DiaclectImg, label: 'Cebuano', nav: '', bgColor: '#7FBCD2' },
    { pic: DiaclectImg, label: 'Tausog', nav: '', bgColor: '#FFEA20' },
    { pic: DiaclectImg, label: 'Bicolano', nav: '', bgColor: '#EDB7ED' },
    { pic: DiaclectImg, label: 'Maranao', nav: '', bgColor: '#EDB7ED' },
  ];

  return (
    <div className="slider-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {array.map((arrayItem, index) => (
          <SwiperSlide key={index} style={{ backgroundColor: arrayItem.bgColor }}>
            <div className="slider-card">
              <div className="slider-card-img">
                <img src={arrayItem.pic} alt="Dialect" />
              </div>
              <SliderBtn label={arrayItem.label} navigateTo={() => navigate(arrayItem.nav)} />
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div> */}
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default CustomSlider;
