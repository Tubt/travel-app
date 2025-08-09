import React from "react";
import type { Tour } from "../constants";

interface SearchResultsProps {
  tours: Tour[];
  searchQuery: string;
  isVisible: boolean;
  onClose: () => void;
}

/**
 * SearchResults component displays search results for tours
 *
 * Features:
 * - Display filtered tour results
 * - Tour cards with detailed information
 * - Close/hide functionality
 * - Responsive grid layout
 * - Professional tour information display
 */
const SearchResults: React.FC<SearchResultsProps> = ({
  tours,
  searchQuery,
  isVisible,
  onClose,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className="search-results-overlay"
      data-testid="search-results-overlay"
    >
      <div
        className="search-results-container"
        data-testid="search-results-container"
      >
        <div
          className="search-results-header"
          data-testid="search-results-header"
        >
          <h3 data-testid="search-results-title">
            🔍 Kết quả tìm kiếm cho: "{searchQuery}"
          </h3>
          <p data-testid="search-results-count">
            Tìm thấy {tours.length} tour phù hợp
          </p>
          <button
            className="close-search-btn"
            onClick={onClose}
            data-testid="search-results-close-btn"
          >
            ✕
          </button>
        </div>

        <div
          className="search-results-content"
          data-testid="search-results-content"
        >
          {tours.length === 0 ? (
            <div className="no-results" data-testid="no-search-results">
              <h4>😔 Không tìm thấy tour nào</h4>
              <p>
                Vui lòng thử với từ khóa khác hoặc liên hệ hotline 1800 8989 để
                được tư vấn.
              </p>
            </div>
          ) : (
            <div
              className="search-results-grid"
              data-testid="search-results-grid"
            >
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="search-result-card"
                  data-testid={`search-result-card-${tour.id}`}
                >
                  <div
                    className="search-card-image"
                    data-testid={`search-card-image-${tour.id}`}
                  >
                    <img
                      src={tour.image}
                      alt={tour.name}
                      data-testid={`search-card-img-${tour.id}`}
                    />
                    <div
                      className="search-card-badge"
                      data-testid={`search-card-badge-${tour.id}`}
                    >
                      {tour.region}
                    </div>
                  </div>

                  <div
                    className="search-card-content"
                    data-testid={`search-card-content-${tour.id}`}
                  >
                    <h4
                      className="search-card-title"
                      data-testid={`search-card-title-${tour.id}`}
                    >
                      {tour.name}
                    </h4>

                    <div
                      className="search-card-info"
                      data-testid={`search-card-info-${tour.id}`}
                    >
                      <span
                        className="search-card-location"
                        data-testid={`search-card-location-${tour.id}`}
                      >
                        📍 {tour.location}, {tour.province}
                      </span>
                      <span
                        className="search-card-duration"
                        data-testid={`search-card-duration-${tour.id}`}
                      >
                        ⏰ {tour.duration}
                      </span>
                      <span
                        className="search-card-rating"
                        data-testid={`search-card-rating-${tour.id}`}
                      >
                        ⭐ {tour.rating}/5
                      </span>
                    </div>

                    <p
                      className="search-card-description"
                      data-testid={`search-card-description-${tour.id}`}
                    >
                      {tour.description}
                    </p>

                    <div
                      className="search-card-highlights"
                      data-testid={`search-card-highlights-${tour.id}`}
                    >
                      {tour.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="highlight-tag"
                          data-testid={`search-highlight-${tour.id}-${index}`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div
                      className="search-card-footer"
                      data-testid={`search-card-footer-${tour.id}`}
                    >
                      <div
                        className="search-card-price"
                        data-testid={`search-card-price-${tour.id}`}
                      >
                        <strong>{tour.price}</strong>
                      </div>
                      <button
                        className="search-card-book-btn"
                        data-testid={`search-card-book-btn-${tour.id}`}
                      >
                        📞 Đặt tour
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
