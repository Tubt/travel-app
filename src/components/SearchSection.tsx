import React, { useState } from "react";
import "./SearchSection.css";
import type { Tour } from "../types/tour";
import { tourService } from "../services/tourService";

const SearchSection: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [tourType, setTourType] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [searchResults, setSearchResults] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLocationSearch = async () => {
    if (!searchText.trim()) return;
    
    setIsLoading(true);
    try {
      const results = await tourService.searchToursByText(searchText);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching tours:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterSearch = async () => {
    setIsLoading(true);
    try {
      const results = await tourService.searchToursByFilters({
        tourType,
        startPoint,
        destination
      });
      setSearchResults(results);
    } catch (error) {
      console.error('Error filtering tours:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="search-section">
      <div className="search-container">
        <div className="search-box">
          <h3>TÌM TOUR HOT THEO ĐỊA DANH, ĐIỂM ĐẾN</h3>
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Nhập thành phố / khu vực"
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="search-btn" onClick={handleLocationSearch}>🔍</button>
          </div>
        </div>

        <div className="search-box">
          <h3>TÌM TOUR THEO ĐIỂM KHỞI HÀNH</h3>
          <div className="search-filters">
            <select 
              className="filter-select"
              value={tourType}
              onChange={(e) => setTourType(e.target.value)}
            >
              <option value="">Loại tour...</option>
              <option value="domestic">Tour trong nước</option>
              <option value="international">Tour nước ngoài</option>
              <option value="oneday">Tour 1 ngày</option>
            </select>
            <select 
              className="filter-select"
              value={startPoint}
              onChange={(e) => setStartPoint(e.target.value)}
            >
              <option value="">Khởi hành...</option>
              <option value="hanoi">Hà Nội</option>
              <option value="hcm">TP. Hồ Chí Minh</option>
              <option value="danang">Đà Nẵng</option>
            </select>
            <select 
              className="filter-select"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Điểm đến...</option>
              <option value="north">Miền Bắc</option>
              <option value="central">Miền Trung</option>
              <option value="south">Miền Nam</option>
            </select>
            <button className="search-btn-main" onClick={handleFilterSearch}>TÌM TOUR</button>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="search-loading">
          Đang tìm kiếm...
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Kết quả tìm kiếm ({searchResults.length} tour):</h3>
          <div className="results-grid">
            {searchResults.map((tour) => (
              <div key={tour.id} className="tour-card">
                <img src={tour.image} alt={tour.name} className="tour-image" />
                <div className="tour-info">
                  <h4>{tour.name}</h4>
                  <p className="tour-description">{tour.description}</p>
                  <p className="tour-duration">⏱ {tour.duration}</p>
                  <p className="tour-type">
                    {tour.type === 'domestic' ? '🏠 Tour trong nước' : 
                     tour.type === 'international' ? '✈️ Tour nước ngoài' : 
                     '🌅 Tour 1 ngày'}
                  </p>
                  <p className="tour-route">
                    📍 {tour.startPoint === 'hanoi' ? 'Hà Nội' :
                        tour.startPoint === 'hcm' ? 'TP. Hồ Chí Minh' : 
                        'Đà Nẵng'} 
                    → {tour.destination === 'north' ? 'Miền Bắc' :
                        tour.destination === 'central' ? 'Miền Trung' :
                        tour.destination === 'south' ? 'Miền Nam' :
                        tour.destination}
                  </p>
                  <p className="tour-price">💰 {tour.price.toLocaleString('vi-VN')}đ</p>
                  <button className="book-btn">ĐẶT TOUR</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSection;
