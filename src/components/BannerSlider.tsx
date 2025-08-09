import React from "react";
import { bannerImages } from "../constants/bannerImages";
import { useBannerSlider } from "../hooks/useBannerSlider";

/**
 * BannerSlider component displays promotional banner images with navigation
 *
 * Features:
 * - Auto-rotating image carousel
 * - Manual navigation with prev/next buttons
 * - Dot indicators for direct slide access
 * - Overlay text for promotional content
 * - Responsive design for different screen sizes
 */
const BannerSlider: React.FC = () => {
  const { currentSlide, nextSlide, prevSlide, goToSlide } = useBannerSlider();

  return (
    <div className="banner-slider" data-testid="banner-slider">
      <div className="slides-container" data-testid="banner-slides-container">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${image.url})` }}
            data-testid={`banner-slide-${index}`}
          >
            <div
              className="banner-overlay"
              data-testid={`banner-overlay-${index}`}
            >
              <h1 className="banner-title" data-testid="banner-main-title">
                TOP NHỮNG ĐỊA ĐIỂM DU LỊCH Ở VIỆT NAM
              </h1>
              <p
                className="banner-subtitle"
                data-testid={`banner-subtitle-${index}`}
              >
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="slider-btn prev-btn"
        onClick={prevSlide}
        data-testid="banner-prev-btn"
      >
        ‹
      </button>
      <button
        className="slider-btn next-btn"
        onClick={nextSlide}
        data-testid="banner-next-btn"
      >
        ›
      </button>

      <div className="slider-dots" data-testid="banner-dots-container">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            data-testid={`banner-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
