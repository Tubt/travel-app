import React from "react";
import { bannerImages } from "../constants/bannerImages";
import { useBannerSlider } from "../hooks/useBannerSlider";

const BannerSlider: React.FC = () => {
  const { currentSlide, nextSlide, prevSlide, goToSlide } = useBannerSlider();

  return (
    <div className="banner-slide-1">
      <div className="slides-container">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="banner-overlay">
              <h1 className="banner-title">
                TOP NHỮNG ĐỊA ĐIỂM DU LỊCH Ở VIỆT NAM
              </h1>
              <p className="banner-subtitle">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-btn prev-btn" onClick={prevSlide}>
        ‹
      </button>
      <button className="slider-btn next-btn" onClick={nextSlide}>
        ›
      </button>

      <div className="slider-dots">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
